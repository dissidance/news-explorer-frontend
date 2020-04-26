import BaseComponent from '../../js/components/BaseComponent';
import './popup.css';
import './_is-opened/popup_is-opened.css';
import {
  popupContainer,
  popupContent,
  closeButton,
  signUpPopupTemplate,
  authPopupTemplate,
  mobileMenuButton,
  successPopupTemplate,
  overlay,
} from '../../js/constants';


class Popup extends BaseComponent {
  constructor(signInForm, signUpForm) {
    super();
    this.signInForm = signInForm;
    this.signUpForm = signUpForm;
    this.handlers = [
      { element: closeButton, event: 'click', callback: () => this.close() },
      { element: document, event: 'keydown', callback: (e) => this._closeOnKey(e) },
      { element: document, event: 'mousedown', callback: (e) => this._closeOnOverlay(e) },
      { element: document, event: 'closePopup', callback: () => this.close() },
      { element: document, event: 'openSuccessPopup', callback: (e) => this._openSuccessPopup(e) },
    ];
  }

  // Вставляем контент в попап
  setContent = (template) => {
    if (document.querySelector('.popup__title')) this._clearContent();

    popupContent.appendChild(template.cloneNode(true).content);

    this.handlers.push({
      element: document.querySelector('.popup__navigation_ref'),
      event: 'click',
      callback: (e) => this.moveToNextPopup(e),
    });

    this._setHandlers(this.handlers);
  }


  _clearContent = () => {
    const form = document.querySelector('.popup__form');

    if (form) popupContent.removeChild(document.querySelector('.popup__form'));

    popupContent.removeChild(document.querySelector('.popup__title'));
    popupContent.removeChild(document.querySelector('.popup__navigation'));
  }


  // Перемещение к следующему попапу по нажатию на кнопку
  moveToNextPopup = (e) => {
    if (e.target.id === 'navToSignUp') {
      this.setContent(signUpPopupTemplate);
      this.signInForm.removeListeners();
      this.signUpForm.init();
    } else if (e.target.id === 'navToSignIn' || e.target.id === 'navAfterSuccess') {
      this.setContent(authPopupTemplate);
      this.signUpForm.removeListeners();
      this.signInForm.init();
    }
  }


  _closeOnKey = (e) => {
    if (Number(e.which === 27)) this.close();
  }


  _closeOnOverlay = (e) => {
    if (e.target.classList.contains('popup_is-opened')) this.close();
  }


  _openSuccessPopup = () => {
    this.setContent(successPopupTemplate);

    const navButton = document.querySelector('.popup__navigation_ref');

    this.handlers.push({
      element: navButton,
      event: 'click',
      callback: (e) => this.moveToNextPopup(e),
    });

    this._setHandlers(this.handlers);
  }


  open = () => {
    popupContainer.classList.add('popup_is-opened');
    mobileMenuButton.classList.add('header__button_is-hidden');
  }


  close = () => {
    popupContainer.classList.remove('popup_is-opened');
    mobileMenuButton.classList.remove('header__button_is-hidden');
    mobileMenuButton.style.backgroundImage = 'url(../../images/menu.svg)';
    overlay.classList.remove('overlay_is-opened');
    this._clearContent();
    this.removeListeners();
  }
}

export default Popup;
