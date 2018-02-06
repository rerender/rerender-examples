import { Component, h } from 'rerender';
import ComplexFormRow from './ComplexFormRow';
import { mask } from '../maskController/MaskController';

class ComplexForm extends Component {
    render() {
        return <form onsubmit={this.handleSubmit} uniqid='form_about'>
            <p>Не смотря на то, что компоненты, лежащие выше формы изменяются динамически, значения введенные пользователем не теряются после перерисовки. Всё благодаря операции move в DOM и заданию uniqid. Попробуйте написать текст в textarea, переместить курсор и убедитесь в том, что положение каретки сохраняется. Если выделить текст, то выделение тоже сохранится. </p>
            <a href="/">Вернуться на главную страницу</a>
            <ComplexFormRow title="Last name">
                <input
                    name="lastName"
                    placeholder="Input last name"
                />
            </ComplexFormRow>
            <ComplexFormRow title="First name">
                <input
                    name="firstName"
                    placeholder="Input first name"
                />
            </ComplexFormRow>
            <ComplexFormRow title="Birthday">
                <input
                    controller={mask}
                    mask="__.__.____"
                    name="birthDate"
                    placeholder="DD.MM.YYYY"
                />
            </ComplexFormRow>
            <ComplexFormRow title="A little about yourself">
                <textarea
                    name="about"
                    rows="10"
                    value="Initial text"
                    placeholder="Text here" />
            </ComplexFormRow>
            <ComplexFormRow title="Sex" label={false}>
                <p>
                    <label>
                        <input
                            name="sex"
                            value="man"
                            type="radio"
                        /> Man
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="sex"
                            value="woman"
                            type="radio"
                        /> Woman
                    </label>
                </p>
            </ComplexFormRow>
            <ComplexFormRow title="Agreement" label={false}>
                <p>
                    <label>
                        <input
                            name="agree"
                            value="true"
                            type="checkbox"
                        /> I agree
                    </label>
                </p>
            </ComplexFormRow>
        </form>;
    }
}

ComplexForm.singleton = true;

export default ComplexForm;
