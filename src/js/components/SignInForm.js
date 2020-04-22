import Form from './Form';

class SignInForm extends Form {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  logger = (e) => {
    e.preventDefault();
    console.log('submit signIn');
  }

  init = () => {
    const submitButton = document.querySelector('.popup__button');
    this.getInputs();
    this._setHandlers([{ element: submitButton, event: 'click', callback: (e) => this.logger(e) },
      {
        element: this.inputs[0],
        event: 'input',
        callback: () => this._validateInputElement(this.inputs[0], this._isValidEmail(this.inputs[0]), 'неверный формат email'),
      },
    ]);
  }
}


export default SignInForm;
