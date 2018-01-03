import { h, Component } from 'rerender';
type Props = {
    path: string,
    config: {
        [key: string]: () => Promise<any>
    }
};

type State = {
    Route: any
};

export default class Router extends Component<Props, State> {
    props: Props;
    state: State;

    componentWillReceiveProps(nextProps: Props) {
        const { config, path } = nextProps;

        config[path]().then(Route => this.setState({
            Route
        }));
    }

    render() {
        const { Route } = this.state;

        return <Route />;
    }
}
