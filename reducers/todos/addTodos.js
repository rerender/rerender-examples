export default function addTodos({ setState, getState }, newTodos) {
    const nextTodos = [
        ...getState(['todos', 'list']),
        ...newTodos
    ];

    setState(nextTodos, ['todos', 'list']);
}
