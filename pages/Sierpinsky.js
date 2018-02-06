import { Component, h } from 'rerender';
import now from 'performance-now';

const targetSize = 25;

class Dot extends Component {
    enter() {
        this.setState({
            hover: true
        });
    }

    leave() {
        this.setState({
            hover: false
        });
    }

    render() {
        var props = this.props;
        var s = props.size * 1.3;
        var style = {
            position: 'absolute',
            background: '#61dafb',
            font: 'normal 15px sans-serif',
            textAlign: 'center',
            cursor: 'pointer',
            width: s + 'px',
            height: s + 'px',
            left: (props.x) + 'px',
            top: (props.y) + 'px',
            borderRadius: (s / 2) + 'px',
            lineHeight: (s) + 'px'
        };

        return <div style={style} onmouseenter={() => this.enter()} onmouseleave={() => this.leave()}>
            {props.text}
        </div>;
    }
}

function SierpinskyTriangle({ x, y, s, children}) {
    if (s <= targetSize) {
        return <Dot
            x={x - (targetSize / 2)}
            y={y - (targetSize / 2)}
            size={targetSize}
            text={children}
        />;
    }

    var slowDown = true;

    if (slowDown) {
        var e = now() + 3;
        while (now() < e) {
        // Artificially long execution time.
        }
    }

    s /= 2;

    return [
        <SierpinskyTriangle x={x} y={y - (s / 2)} s={s}>
            {children}
        </SierpinskyTriangle>,
        <SierpinskyTriangle x={x - s} y={y + (s / 2)} s={s}>
            {children}
        </SierpinskyTriangle>,
        <SierpinskyTriangle x={x + s} y={y + (s / 2)} s={s}>
            {children}
        </SierpinskyTriangle>
    ];
}

const containerStyle = {
    position: 'absolute',
    transformOrigin: '0 0',
    left: '50%',
    top: '50%',
    width: '10px',
    height: '10px',
    background: '#eee'
};

class Sierpinsky extends Component {
    init() {
        this.setState({
            seconds: '3'
        });
    }

    render() {
        return <div style={containerStyle}>
            <SierpinskyTriangle x={0} y={0} s={1000}>
                {this.state.seconds}
            </SierpinskyTriangle>
        </div>;
    }
}

export default Sierpinsky;
