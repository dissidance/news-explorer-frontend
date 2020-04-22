import BaseComponent from './BaseComponent';

class Form extends BaseComponent {
  constructor() {
    super();
    this.form = document.querySelector('.popup__form');
    this.inputs = [];
    this.navigation = document.querySelector('.popup__navigation_ref');
  }

  setServerError = (message) => {
    const err = document.querySelector('.error-message');
    if (err) err.textContent = message;
  }

  _validateInputElement = (elem, handler, errMessage) => {
    const errorElement = document.querySelector(`#error-${elem.id}`);
    this._resetError(elem);
    if (!handler) {
      errorElement.textContent = errMessage;
      this._activateError(errorElement);
      return false;
    }
    return true;
  };

  _activateError = (elem) => {
    elem.parentNode.classList.add('input-container__invalid');
  };

  getInputs = () => {
    this.inputs = document.querySelectorAll('.popup__input');
    return this.inputs;
  };

  _clear = () => this.inputs.forEach((input) => {
    input.value = '';
  });

  _resetError = (elem) => {
    elem.textContent = 'error';
    elem.parentNode.classList.remove('input-container__invalid');
  };

  _isValidEmail = (elem) => {
    const { value } = elem;
    const regExp = /^([\w]+((-|.)?([\w+])?)){2,}@\w{2,}\.\w{2,}(\.\w{2,})?$/;
    return regExp.test(value);
  };

  _isValidPassoword = (elem) => {
    if (elem.value.length >= 8) return true;
    return false;
  }

  _validateForm = () => {
  }

  _getInfo = () => {

  }
}

export default Form;
