//buttons
const authButton = document.querySelector('.header__button-auth');
const closeButton = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

//Popup templates
const authPopupTemplate = document.querySelector('.auth-popup');
const signUpPopupTemplate = document.querySelector('.sign-up-popup');
const successPopupTemplate = document.querySelector('.success-popup');

//Header
const menuButtonFavorites = document.querySelector('.menu__item_favorites');
const logoutIcon = document.querySelector('.header__logout-icon');

export { authButton,
  closeButton,
  authPopupTemplate,
  popupContainer,
  popupContent,
  signUpPopupTemplate,
  successPopupTemplate,
  menuButtonFavorites,
  logoutIcon
};