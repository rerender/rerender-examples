import { h, renderClient } from 'rerender';
import Application from './components/Application/Application';
import Router, { getRoute } from './packages/Router/Router';
import { routesConfig } from './routesConfig';

(async function() {
    const path = document.location.pathname;
    const routesData = getRoute(path, routesConfig);

    renderClient(<Application>
        <Router
            config={routesConfig}
            Route={await routesData.Route}
            params={routesData.params}
        />
    </Application>);
})();
