import * as express from 'express';
import { renderServer, h, Template } from 'rerender';
import Application from './components/Application/Application';
import Router, { getRoute } from './components/Router/Router';
import { routesConfig } from './routesConfig';

const server = express();
const port = process.env.PORT || 3005;
const rootPath = __dirname.split('/').slice(0, -1).join('/');
const staticRoot = '/static';
const staticPath = rootPath + '/dist/static/';

server.listen(port);
console.log('Server listen port', port); // tslint:disable-line: no-console

server.get(staticRoot + '/*', (request, response) => {
    try {
        const path = request.path.replace(staticRoot, '');
        response.sendFile(rootPath + path);
    } catch (e) {
        console.log('Error 500 for static file: ', request.path); // tslint:disable-line: no-console
        response.sendStatus(500);
    }
});

server.get('*', async (request, response) => {
    try {
        const routeData = getRoute(request.path, routesConfig);
        // FIXME: remove as Tempalte
        const html = await renderServer(<Application>
            <Router
                config={routesConfig}
                Route={await routeData.Route}
                params={routeData.params}
            />
        </Application> as Template);
        response.sendStatus(routeData.exist ? 200 : 404);
        response.send(html);
    } catch (e) {
        response.sendStatus(500);
        response.send('<h1>Error 500</h1>' + e.message);
    }
    response.end();
});
