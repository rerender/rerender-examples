import { h, StatelessComponent, Renderable } from 'rerender';
import Html from './Html';
import './Layout.css';

type Props = {
    header: Renderable
};

const Layout: StatelessComponent<Props> = ({ header, children }) => <Html>
    <div class="layout__container">
        <div class="layout__header">
            {header}
        </div>
        <div class="layout__content">
            {children}
        </div>
        <div class="layout__footer">
            &copy; rerender todos
        </div>
    </div>
</Html>;

export default Layout;
