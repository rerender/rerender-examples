import { h } from 'rerender';

export default function TodoListItem({ todo, onRemove }) {
    return <li className="todo-list__item">
        {todo.text}
        <button
            className="todo-list__remove"
            onclick={onRemove}>Удалить</button>
    </li>;
}
