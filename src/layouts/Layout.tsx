import { h, StatelessComponent, Renderable } from 'rerender';
import Html from './Html';
// import './Layout.css';

type Props = {
    header: Renderable,
    title: string
};

const Layout: StatelessComponent<Props> = ({ header, children, title }) => <Html title={title}>
    <div class="layout__container">
        <div class="layout__header">
            {header}
        </div>
        <div class="layout__content">
            {children}
        </div>
        <div class="layout__footer">
            \u00a9 rerender todos
        </div>
    </div>
</Html>;

export default Layout;
