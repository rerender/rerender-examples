import { h, Component, ElementType } from 'rerender';

type RoutesConfig = {
    [key: string]: () => ElementType | Promise<any>
};

type RouteParams = {
    [key: string]: string
};

type Props = {
    params?: RouteParams,
    Route: ElementType,
    config: RoutesConfig
};

type State = {
    Route: ElementType,
    params: RouteParams
};

export const getRouteByPath = (path: string, config: RoutesConfig) => {
    // TODO: use params like :param
    return config[path]();
};
export const getParamsByPath = (path: string, config: RoutesConfig) => {
    // TODO: use params like :param
    return {};
};

type Defaults = {
    params: RouteParams
};

export default class Router extends Component<Props, State, Defaults> {
    static defaults: Defaults = {
        params: {}
    };

    state: State = {
        Route: this.props.Route,
        params: this.props.params
    };

    render() {
        const { Route } = this.state;

        return <Route />;
    }
}
