import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms(){
    return <Layout title="forms">
        <ComplexForm uniqid="myform" />
    </Layout>;
}

export default Forms;
