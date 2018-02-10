import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import A from '../components/a/A';

function Index(){
    return <Layout title="todos">
        <p><A href="/forms/">Forms</A></p>
        <p><A href="/todos/">Todos</A></p>
        <p><A href="/controllers/">Controllers</A></p>
        <p><A href="/animations/">Animations</A></p>
        <p><A href="http://localhost:3005/stream/">Stream render on server</A></p>
    </Layout>;
}

export default Index;
