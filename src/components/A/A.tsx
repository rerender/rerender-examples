import { h, StatelessComponent } from 'rerender';

type Props = {
    href?: string
};

const A: StatelessComponent<Props> = ({ children, ...rest }) =>
    <a {...rest}>
        {children}
    </a>;

export default A;
