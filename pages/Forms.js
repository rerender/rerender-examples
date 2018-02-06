import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms(){
    return <Layout title="forms">
        <h2>Layout with div</h2>
        <div>
            <ComplexForm />
        </div>
    </Layout>;
}

export default Forms;
