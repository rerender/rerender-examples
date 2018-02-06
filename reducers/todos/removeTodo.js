export default function removeTodo({ getState, setState }, id) {
    const nextTodos = getState(['todos', 'list']).filter(todo => todo.id !== id);

    setState(nextTodos, ['todos', 'list']);
}
