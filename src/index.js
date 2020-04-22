import './style.css';
import Popup from './blocks/popup/Popup';
import Header from './blocks/header/Header';
import { authButton, authPopupTemplate } from './js/constants';
import SignInForm from './js/components/SignInForm';
import SignUpForm from './js/components/SignUpForm';


const signInForm = new SignInForm();
const signUpForm = new SignUpForm();

const popup = new Popup(signInForm, signUpForm);

authButton.addEventListener('click', () => {
  popup.setContent(authPopupTemplate);
  signInForm.init();
  popup.open();
});

const header = new Header();

header.render({ isLoggedIn: true, userName: 'Макс' });
