import './style.css';
import Popup from './blocks/popup/Popup';
import Header from './blocks/header/Header';
import {
  authButton, authPopupTemplate, mobileMenuButton, menu, overlay,
} from './js/constants';
import SignInForm from './js/components/SignInForm';
import SignUpForm from './js/components/SignUpForm';

const header = new Header();
const signInForm = new SignInForm(header.render);
const signUpForm = new SignUpForm();
const popup = new Popup(signInForm, signUpForm);

const openMenu = () => {
  if (menu.classList.contains('menu_is-opened')) {
    menu.classList.remove('menu_is-opened');
    mobileMenuButton.src = './images/menu.svg';
    overlay.classList.remove('overlay_is-opened');
  } else {
    menu.classList.add('menu_is-opened');
    mobileMenuButton.src = './images/close-mid.svg';
    overlay.classList.add('overlay_is-opened');
  }
};

const openPopup = () => {
  menu.classList.remove('menu_is-opened');
  popup.setContent(authPopupTemplate);
  signInForm.init();
  popup.open();
};

header.render({ isLoggedIn: false, userName: 'Макс' });

authButton.addEventListener('click', openPopup);
mobileMenuButton.addEventListener('click', openMenu);
