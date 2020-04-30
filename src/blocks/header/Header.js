import './header.css';
import BaseComponent from '../../js/components/BaseComponent';
import { menuButtonFavorites, logoutIcon, userName } from '../../js/constants';

class Header extends BaseComponent {
  render = (props) => {
    if (props.isLoggedIn) {
      userName.textContent = props.userName;
      if (menuButtonFavorites) menuButtonFavorites.classList.remove('menu__item_is-opened');
      logoutIcon.classList.add('header__logout-icon_is-active');
    } else {
      userName.textContent = 'Авторизоваться';
      if (menuButtonFavorites) menuButtonFavorites.classList.add('menu__item_is-opened');
      logoutIcon.classList.remove('header__logout-icon_is-active');
    }
  }
}

export default Header;
