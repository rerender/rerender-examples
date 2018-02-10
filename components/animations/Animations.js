import { Component, h } from 'rerender';

class Animations extends Component {
    init() {
        this.angle = 0;
        this.setState({
            color: 'white'
        });
        this.toggleColor = this.toggleColor.bind(this);
        this.handleDiv = this.handleDiv.bind(this);
        this.rotate = this.rotate.bind(this);
        setInterval(this.toggleColor, 2000);
    }

    handleDiv(ref) {
        this.div = ref;
        setInterval(this.rotate, 16);
    }

    toggleColor() {
        if (this.state.color !== 'black') {
            this.setState({
                color: 'black'
            });
        } else {
            this.setState({
                color: 'white'
            });
        }
    }

    rotate() {
        this.angle = this.angle + 3;
        this.div.set('style', { transform: `rotate(${this.angle}deg)` });
    }

    render() {
        return <div
            ref={this.handleDiv}
            style={{
                width: '200px',
                height: '200px',
                position: 'absolute',
                left: 30,
                top: 30,
                backgroundColor: this.state.color,
                border: '1px solid #000'
            }}
        />;
    }
}

export default Animations;
