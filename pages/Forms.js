import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms(){
    return <Layout title="forms">
        <div>
            <ComplexForm />
        </div>
    </Layout>;
}

export default Forms;