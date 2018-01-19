import { h, Component, ElementType } from 'rerender';

type RouteType = ElementType | Promise<any>;

type RouteParams = {
    [key: string]: string
};

export type RoutesConfig = {
    [key: string]: () => RouteType
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

export type GetRouteSignature = (path: string, config: RoutesConfig) => {
    Route: RouteType,
    params: RouteParams,
    exist: boolean
};

export const getRoute: GetRouteSignature = (path, config) => {
    // TODO: use params like :param
    const Route = config[path]();
    const exist = Boolean(Route);

    return {
        Route,
        params: {},
        exist
    };
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
