import { h } from 'rerender';
// TODO: load on the fly
import * as pages from '../../pages/pages';

export default function PageLoader({ page, children }) {
    const Page = pages[page] || pages.Error404;

    return <Page>{children}</Page>;
}
