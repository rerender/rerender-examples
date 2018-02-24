import { h, Component } from 'rerender';

type Props = {};

export default class Application extends Component<Props> {
    render() {
        return <div>{this.props.children}</div>;
    }
}
