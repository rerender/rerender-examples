export default function setRoutes({ getState, setState }, routes) {
    const { routes: prevRoutes } = getState();
    const nextRoutes = Object.assign({}, prevRoutes);
    nextRoutes.routes = routes;

    setState({
        routes: nextRoutes
    });
}
