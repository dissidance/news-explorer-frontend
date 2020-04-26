import './style.css';

import Header from '../blocks/header/Header';
import { authButton } from '../js/constants';

const init = () => {
  const header = new Header();

  header.render({ isLoggedIn: true, userName: 'Макс' });
  authButton.addEventListener('click', () => {
    // logout
    window.location.assign('http://localhost:8080');
  });
};
init();
