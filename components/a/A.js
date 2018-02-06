import { Component, h } from 'rerender';

class A extends Component {
    init() {
        this.handleRef = this.handleRef.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleRef(ref) {
        this.ref = ref;
    }

    handleClick(event) {
        this.trigger('a:clicked', {
            domEvent: event,
            url: this.ref.get('href')
        });
    }

    render() {
        return <a
            ref={this.handleRef}
            onclick={this.handleClick}
            {...this.props}
        >{this.props.children}</a>;
    }
}

export default A;
