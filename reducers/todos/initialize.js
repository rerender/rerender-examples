export default function({ setState, getState }) {
    if (!getState(['todos', 'list'])) {
        setState([], ['todos', 'list']);
    }
}
