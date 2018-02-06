import { Component, h } from 'rerender';
import ComplexFormRow from './ComplexFormRow';

class ComplexForm extends Component {
    render() {
        return <form onsubmit={this.handleSubmit}>
            <ComplexFormRow title="Фамилия">
                <input
                    name="lastName"
                    placeholder="Введите фамилию"
                />
            </ComplexFormRow>
            <ComplexFormRow title="Имя">
                <input
                    name="firstName"
                    placeholder="Введите Имя"
                />
            </ComplexFormRow>
            <ComplexFormRow title="Дата рождения">
                <input
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
