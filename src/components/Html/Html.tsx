import { h, StatelessComponent, Doctype, Fragment } from 'rerender';

type Props = {
    title: string
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

export default Html;
