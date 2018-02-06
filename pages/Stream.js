import { h } from 'rerender';
import StreamItem from '../components/streamItem/StreamItem';

function StreamItems() {
    const items = [];

    for (let i = 0; i < 1000; i++) {
        items.push(<StreamItem key={'s' + i} index={i} />);
    }

    return <div>
        {items}
    </div>;
}

function Stream(){
    return <div>
        <div style={{ backgroundColor: 'pink', height: '200px' }} />
        <StreamItems />
    </div>;
}

export default Stream;
