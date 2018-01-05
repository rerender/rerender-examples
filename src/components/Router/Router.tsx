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

};

type Defaults = {
    params: RouteParams
};

const defaults: Defaults = {
    params: {}
};

export default class Router extends Component<Props, State, typeof defaults> {
    static defaults = defaults;

    state: State = {
        Route: this.props.Route,
        params: this.props.params
    };

    render() {
        const { Route } = this.state;

        return <Route />;
    }
}
