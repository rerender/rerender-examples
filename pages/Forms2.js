import { h } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms(){
    return <Layout title="forms">
        <h2>Layout with table</h2>
        <table>
            <tr>
                <td>
                    <ComplexForm />
                </td>
            </tr>
        </table>
    </Layout>;
}

export default Forms;
