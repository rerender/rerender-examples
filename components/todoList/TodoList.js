import memoize from 'ramda/src/memoize';
import { Component, connect, h } from 'rerender';
import TodoListItem from './TodoListItem';
import ADD_TODO from '../../events/todos/ADD_TODO';
import REMOVE_TODO from '../../events/todos/REMOVE_TODO';

class TodoList extends Component {
    init() {
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleNewTodoRef = this.handleNewTodoRef.bind(this);
        this.state.newTodoValue = '';
        this.bindRemove = memoize(id => this.handleRemove.bind(this, id));
    }

    handleNewTodoRef(ref) {
        this.newTodoInput = ref;
    }

    handleSubmit(event) {
        this.dispatch(ADD_TODO, {
            text: this.newTodoInput.get('value')
        });

        this.setState({ newTodoValue: '' });

        this.newTodoInput.reset();
        event.preventDefault();
    }

    handleInput() {
        this.setState({
            newTodoValue: this.newTodoInput.get('value')
        });
    }

    handleRemove(id) {
        this.dispatch(REMOVE_TODO, id);
    }

    render() {
        const { todos, buttonText } = this.props;
        const items = <ul className="todo-list__list">
            {todos.map(todo => <TodoListItem
                key={todo.id}
                todo={todo}
                onRemove={this.bindRemove(todo.id)}
            />)}
        </ul>;

        return <div className="todo-list">
            {items}
            <div className="todo-list__add">
                <form onsubmit={this.handleSubmit}>
                    <input
                        ref={this.handleNewTodoRef}
                        value=""
                        name="text"
                        autocomplete="off"
                        oninput={this.handleInput}
                        placeholder="New todo" />
                    <button>{buttonText}</button>
                </form>
            </div>
            Text from input: "{this.state.newTodoValue}"
            {this.props.children}
        </div>;
    }
}

const select = ({
    todos: {
        list: todos
    }
}) => ({ todos });

export default connect({
    // init() {
    //     this.dispatch(GET_TODOS);
    // },
    select
})(TodoList);
