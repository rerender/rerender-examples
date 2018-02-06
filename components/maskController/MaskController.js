import { Component, memoizeLast, createController } from 'rerender';

const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;
const TOP_KEY_CODE = 38;
const BOTTOM_KEY_CODE = 40;
const ESC_KEY_CODE = 27;
const BACKSPACE_KEY_CODE = 8;
const DELETE_KEY_CODE = 46;
const TAB_KEY_CODE = 9;

const navigationKeyCodes = {
    [LEFT_KEY_CODE]: true,
    [RIGHT_KEY_CODE]: true,
    [TOP_KEY_CODE]: true,
    [BOTTOM_KEY_CODE]: true,
    [ESC_KEY_CODE]: true,
    [BACKSPACE_KEY_CODE]: true,
    [DELETE_KEY_CODE]: true,
    [TAB_KEY_CODE]: true
};

class MaskController extends Component {
    init() {
        this.handleRef = this.handleRef.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.merge = memoizeLast(this.merge.bind(this));
        if (this.props.mask) {
            this.setState({
                maxLength: this.props.mask.length
            });
        }
        this.setState({
            onkeydown: this.handleKeyDown,
            oninput: this.handleInput,
            ref: this.handleRef
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.mask !== this.props.mask) {
            this.setState({
                maxLength: nextProps.mask ? nextProps.mask.length : null
            });
        }
    }

    handleRef(ref) {
        this.input = ref;
    }

    handleKeyDown(event) {
        if (/\d/.test(event.key) || navigationKeyCodes[event.keyCode] || event.ctrlKey || event.metaKey) {
            return;
        }

        event.preventDefault();
    }

    handleInput() {
        const value = this.input.get('value');
        this.input.set('value', this.mask(value));
    }

    merge(props, controllerProps) {
        const skip = {
            mask: true,
            value: true
        };

        const merged = Object.keys(props).reduce((memo, key) => {
            if (!skip[key]) {
                memo[key] = props[key];
            }

            return memo;
        }, {});

        for (let name in controllerProps) {
            merged[name] = controllerProps[name];
        }

        merged.value = this.mask(props.value);

        return merged;
    }

    mask(value = '') {
        value = String(value);
        const mask = this.props.mask;
        let maskIndex = 0;
        let masked = '';

        for (let valueIndex = 0, l = value.length, m = mask.length; valueIndex < l && maskIndex < m; ) {
            if (mask[maskIndex] === '_') {
                if (/^\d$/.test(value[valueIndex])) {
                    masked += value[valueIndex];
                    maskIndex += 1;
                    valueIndex += 1;
                } else {
                    valueIndex += 1;
                    continue;
                }
            } else if (value[valueIndex] === mask[maskIndex]) {
                masked += value[valueIndex];
                valueIndex += 1;
                maskIndex += 1;
            } else {
                masked += mask[maskIndex];
                maskIndex += 1;
            }
        }

        return masked;
    }

    renderProps() {
        return this.merge(this.props, this.state);
    }
}

export const mask = createController(MaskController)();

export default MaskController;
