import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';
import A from '../components/a/A';

function Index(){
    return <Layout title="todos">
        <p><A href="/todos/">Todos</A></p>
        <p><A href="/second/">Go empty page</A></p>
        <p><A href="/forms/">Forms</A></p>
        <p><A href="/no-exist/">Bad link</A></p>
        <ComplexForm uniqid="myform" />
    </Layout>;
}

export default Index;
