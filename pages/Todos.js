import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import TodoList from '../components/todoList/TodoList';
import A from '../components/a/A';

function Todos(){
    return <Layout title="todos">
        <TodoList buttonText="Add todo" />
        <A href="/">Go back</A>
    </Layout>;
}

export default Todos;
