import { h } from 'rerender';

function ComplexFormRow({ title, label, children }) {
    return <div className="complex-form__row">
        <div className="complex-form__row-title">
            {label ? <label>{title}</label> : title}
        </div>
        <div className="complex-form__row-component">
            {children}
        </div>
    </div>;
}

ComplexFormRow.defaults = {
    label: true
};

export default ComplexFormRow;
