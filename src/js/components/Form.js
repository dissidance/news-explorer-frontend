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

  _validateInputElement = (elem, typeField) => {
    const errorElement = document.querySelector(`#error-${elem.id}`);
    this._resetError(elem);
    if (!this._isEmptyField(elem)) {
      errorElement.textContent = 'Это обязательное поле';
      this._activateError(errorElement);
      return false;
    }
    if (typeField === 'email') {
      if (!this._isValidEmail(elem)) {
        errorElement.textContent = 'Неверный формат email';
        this._activateError(errorElement);
        return false;
      }
    }
    if (typeField === 'password') {
      if (!this._isValidPassoword(elem)) {
        errorElement.textContent = 'Должно быть не меньше 8 символов';
        this._activateError(errorElement);
        return false;
      }
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

  _isEmptyField = (elem) => {
    if (elem.value.length !== 0) return true;
    return false;
  }

  _isValidEmail = (elem) => {
    const { value } = elem;
    const regExp = /^([\w]+((-|.)?([\w+])?)){2,}@\w{2,}\.\w{2,}(\.\w{2,})?$/;
    return regExp.test(value);
  };

  _isValidPassoword = (elem) => {
    if (elem.value.length >= 8) return true;
    return false;
  }

  _getInfo = (e) => {
    e.preventDefault();
  }
}

export default Form;
