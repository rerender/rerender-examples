import ADD_TODOS from '../../events/todos/ADD_TODOS';
export default function addTodo({ dispatch }, todo) {
    return dispatch(ADD_TODOS, [{
        text: todo.text,
        id: 'id' + Date.now() + Math.random() * 1000
    }]);
}
