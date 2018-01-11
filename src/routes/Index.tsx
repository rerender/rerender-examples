import { h, StatelessComponent } from 'rerender';
import A from '../components/A/A';

const Index: StatelessComponent<{}> = () => <html>
    <head><title>Title</title></head>
    <body>
        <div class="block">text of div</div>
        <A href="/todos">Todos</A>
    </body>
</html>;

export default Index;
