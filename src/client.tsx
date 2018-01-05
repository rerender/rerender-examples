import { h, renderClient } from 'rerender';
import Application from './components/Application/Application';
import Router, { getRouteByPath, getParamsByPath } from './components/Router/Router';
import { routesConfig } from './routesConfig';

(async function() {
    const path = document.location.pathname;

    renderClient(<Application>
        <Router
            config={routesConfig}
            Route={await getRouteByPath(path, routesConfig)}
            params={getParamsByPath(path, routesConfig)}
        />
    </Application>);
})();
