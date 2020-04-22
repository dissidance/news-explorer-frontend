import './header.css';
import BaseComponent from '../../js/components/BaseComponent';
import { authButton, menuButtonFavorites, logoutIcon } from '../../js/constants';

class Header extends BaseComponent {
  render = (props) => {
    if (props.isLoggedIn) {
      authButton.textContent = props.userName;
      menuButtonFavorites.classList.toggle('menu__item_is-opened');
      authButton.appendChild(logoutIcon);
    } else {
      authButton.textContent = 'Авторизоваться';
      menuButtonFavorites.classList.toggle('menu__item_is-opened');
      authButton.removeChild(logoutIcon);
    }
  }
}

export default Header;
