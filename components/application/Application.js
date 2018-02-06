import { Component, connect, h } from 'rerender';
import INITIALIZE from '../../events/INITIALIZE';
import SET_ROUTE from '../../events/routes/SET_ROUTE';
import NAVIGATE_TO_URL from '../../events/routes/NAVIGATE_TO_URL';
import PageLoader from '../pageLoader/PageLoader';

class Application extends Component {
    init() {
        this.handlePopState = this.handlePopState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.on('a:clicked', this.handleClick);
    }

    componentDidMount() {
        const { window = self } = this.props;
        window.onpopstate = this.handlePopState;
        window.history.replaceState({
            route: this.props.route
        }, this.props.route.title);

        // setInterval(() => {
        //     let { route } = this.props;
        //
        //     this.dispatch(NAVIGATE_TO_URL, route.page === 'Index' ? '/forms/' : '/');
        // }, 2000);
    }

    handlePopState(event) {
        this.dispatch(SET_ROUTE, event.state.route);
    }

    handleClick(event) {
        const { url, domEvent } = event.payload;
        const external = /s^(\w*:)?\/\//.test(url);

        if (url && !external) {
            domEvent.preventDefault();
            this.dispatch(NAVIGATE_TO_URL, url);
        }
    }

    render() {
        return <PageLoader page={this.props.route.page} />;
    }
}

function select ({
    routes: {
        route
    }
}) {
    return { route };
}

export default connect({
    init() {
        this.dispatch(INITIALIZE);
        this.dispatch(SET_ROUTE, this.props.initialRoute);
    },
    select,
    merge: false
})(Application);
