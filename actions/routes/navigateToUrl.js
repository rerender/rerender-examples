import routes from '../../configs/routes';
import SET_ROUTE from '../../events/routes/SET_ROUTE';

export default function navigateToUrl({ getState, dispatch, win = self }, url) {
    var nextRoute = routes[url] || routes['/404/'];

    if (nextRoute !== getState(['routes', 'route'])) {
        dispatch(SET_ROUTE, nextRoute);
        win.history.pushState({
            route: nextRoute
        }, nextRoute.title, url);
    }
}
