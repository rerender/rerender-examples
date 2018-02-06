export default function setRoute({ setState, getState }, route) {
    setState(route, ['routes', 'route']);
}
