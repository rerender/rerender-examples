import { h, Component } from 'rerender';
import Router from '../Router/Router';

const config = {
    '/': () => import('../../routes/Index'),
    '/todos': () => import('../../routes/Todos'),
    '/todos/:id': () => import('../../routes/Todos')
};

type Props = {
    path: string
};

export default class Application extends Component<Props> {
    render() {
        return <Router config={config} path={this.props.path} />;
    }
}
