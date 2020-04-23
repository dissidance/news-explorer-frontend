import './header.css';
import './__button-auth/_theme/_white/__button-auth_theme_white.css';
import BaseComponent from '../../js/components/BaseComponent';
import { menuButtonFavorites, logoutIcon, userName } from '../../js/constants';

class Header extends BaseComponent {
  render = (props) => {
    if (props.isLoggedIn) {
      userName.textContent = props.userName;
      menuButtonFavorites.classList.toggle('menu__item_is-opened');
      logoutIcon.classList.add('header__logout-icon_is-active');
    } else {
      userName.textContent = 'Авторизоваться';
      menuButtonFavorites.classList.toggle('menu__item_is-opened');
      logoutIcon.classList.remove('header__logout-icon_is-active');
    }
  }
}

export default Header;
