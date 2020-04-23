import Form from './Form';

class SignUpForm extends Form {
  _validateForm = () => {
    if (this._validateInputElement(this.inputs[0], 'email')
    && this._validateInputElement(this.inputs[1], 'password')
    && this._validateInputElement(this.inputs[2])) {
      this.submitButton.removeAttribute('disabled');
      this.submitButton.classList.remove('popup__button_disabled');
    } else {
      this.submitButton.setAttribute('disabled', true);
      this.submitButton.classList.add('popup__button_disabled');
    }
  };

  init = () => {
    this.getInputs();
    this.submitButton = document.querySelector('.popup__button');
    const form = document.querySelector('.popup__form');

    this._setHandlers([{ element: this.submitButton, event: 'click', callback: (e) => this._getInfo(e) },
      {
        element: this.inputs[0],
        event: 'input',
        callback: () => this._validateInputElement(this.inputs[0], 'email'),
      },
      {
        element: this.inputs[1],
        event: 'input',
        callback: () => this._validateInputElement(this.inputs[1], 'password'),
      },
      {
        element: this.inputs[1],
        event: 'input',
        callback: () => this._validateInputElement(this.inputs[2]),
      },
      {
        element: form,
        event: 'input',
        callback: () => this._validateForm(),
      },
    ]);
  }
}

export default SignUpForm;
