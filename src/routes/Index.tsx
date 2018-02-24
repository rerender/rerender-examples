import { h, StatelessComponent } from 'rerender';
import A from '../components/A/A';
import Layout from '../layouts/Layout';

const Index: StatelessComponent<{}> = () => <Layout header="Main page" title='Hello world!'>
    <p>Links list:</p>
    <ul>
        <li>
            <A href="/todos">Todos</A>
        </li>
    </ul>
</Layout>;

export default Index;
