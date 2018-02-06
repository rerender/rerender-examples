import express from 'express';
import { renderServer, h } from 'rerender';
import defaults from 'lodash/defaults';
import find from 'lodash/find';
import debug from 'debug';
import routes from '../configs/routes';
import staticConfig from '../configs/static';
import env from '../configs/env';
import Application from '../components/application/Application';

defaults(process.env, env);
debug.enable(process.env.DEBUG);

const logInfo = debug('framework:info:ServerApplication');
const logError = debug('framework:error:ServerApplication');
const staticRoot = process.env.STATIC_ROOT;
const rootDir = __dirname.split('/').slice(0, -1).join('/');

class ServerApplication {
    constructor() {
        this.initServer();
    }

    initServer() {
        const server = express();

        this.requestHandler = this.requestHandler.bind(this);
        this.staticRequestHandler = this.staticRequestHandler.bind(this);

        server.get(staticRoot + '/*', this.staticRequestHandler);

        for (let path in routes) {
            const route = routes[path];

            if (route.method === 'post') {
                server.post(path, this.requestHandler);
            } else {
                server.get(path, this.requestHandler);
            }
        }

        // server.get(this.requestHandler);

        server.listen(process.env.PORT);
        logInfo('Server listen port', process.env.PORT);
    }

    requestHandler(request, response) {
        try {
            this.sendPage(request.path, response);
        } catch (error) {
            this.send500(error, response);
        }
    }

    sendPage(path, response) {
        logInfo('Request path', path);

        let route = routes[path];
        logInfo('route', route.title);

        if (!route) {
            response.writeHead(404, {'Content-Type': 'text/html; charset=utf8'});
            route = routes['/404/'];
        } else {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        }

        let ended; let sended; response.on('drain', () => {
            sended = true;
        });

        renderServer(<Application initialRoute={route}/>, {
            wrap: true,
            applicationId: 'application',
            fullHash: true,
            title: route.title,
            head: this.getCss(),
            bodyEnd: `<script>window.__INITIAL_ROUTE = ${JSON.stringify(route)};</script>` + this.getScripts(),
            onData: html => {
                sended = response.write(html);
            },
            onEnd: () => {
                if (sended) {
                    response.end();
                } else {
                    response.on('drain', () => response.end());
                }
            },
            onError: error => ended ? logError(error) : this.send500(error, response)
        });
    }

    send500(error, response) {
        logError(error);
        response.write(`<script>
            document.body.innerHTML = '<h1>Error 500</h1>' + ${process.env.NODE_ENV === 'development' ? JSON.stringify(error.toString()) : ''};
        </script>`);
        response.end();
    }

    getCss() {
        return ['/components/application/application.less'].map(path => {
            return `<link rel="stylesheet/less" type="text/css" href="${staticRoot}${path}"/>`;
        });
    }

    getScripts() {
        let scripts = [
            // '/node_modules/less/dist/less.js',
            '/dist/ClientApplication.js'
        ].map(path => `<script src="${staticRoot}${path}"></script>`);

        return scripts.join('');
    }

    staticRequestHandler(request, response) {
        var path = request.path.replace(staticRoot, '');

        if (find(staticConfig.enabledPatterns, pattern => pattern.test(path))) {
            logInfo('Request static path', path);
            response.sendFile(rootDir + path);
        } else {
            logInfo('Access to static file not allowed at configs (see config/static.js)', path);
            response.sendStatus(403);
        }
    }
}

new ServerApplication();

export default ServerApplication;
