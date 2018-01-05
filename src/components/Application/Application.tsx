import { h, Component, ElementType } from 'rerender';
import Router from '../Router/Router';

export const routesConfig = {
    '/': () => import('../../routes/Index'),
    '/todos': () => import('../../routes/Todos'),
    '/todos/:id': () => import('../../routes/Todos')
};

type Props = {
    Route: ElementType
};

export default class Application extends Component<Props> {
    render() {
        return <Router config={routesConfig} Route={this.props.Route} />;
    }
}
