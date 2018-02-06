import { Component, h } from 'rerender';
import LONG_ACTION from '../../events/stream/LONG_ACTION';

export default class StreamItem extends Component {
    init() {
        this.dispatch(LONG_ACTION);
    }

    render() {
        return <div style={{
            backgroundColor: `rgb(0, 0, ${this.props.index % 255})`,
            height: '10px',
            width: '50px',
            float: 'left'
        }}></div>;
    }
}
