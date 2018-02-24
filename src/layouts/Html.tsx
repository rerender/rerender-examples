import { h, StatelessComponent, Doctype, Fragment, Renderable/* , connect */ } from 'rerender';
import { StoreState } from '../selectors/types';

type Props = {
    title: Renderable
};

const Html: StatelessComponent<Props> = ({ title, children }) => <Fragment>
    <Doctype />
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
            {children}
        </body>
    </html>
</Fragment>;

const map = ({ title }: StoreState) => ({
    title
});

export default Html;
// export default (connect as any)(map)(Html);
