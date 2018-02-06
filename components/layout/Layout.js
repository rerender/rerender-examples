import { h } from 'rerender';

function Layout({ title, children }){
    return <div className="layout">
        <div className="layout__container">
            <div className="layout__header">
                {title}
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </div>;
}

Layout.defaults = {
    title: 'Title'
};

export default Layout;
