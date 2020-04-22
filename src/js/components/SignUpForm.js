import Form from './Form';

class SignUpForm extends Form {
  constructor() {
    super();
    console.log(this);
  }

  logger = (e) => {
    e.preventDefault();
    console.log('submit signUp');
  }

  init = () => {
    const submitButton = document.querySelector('.popup__button');
    this.getInputs();
    this._setHandlers([{ element: submitButton, event: 'click', callback: (e) => this.logger(e) }]);
  }
}

export default SignUpForm;
