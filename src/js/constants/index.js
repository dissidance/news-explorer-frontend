//  buttons
const authButton = document.querySelector('.header__button-auth');
const closeButton = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

//  Popup templates
const authPopupTemplate = document.querySelector('#auth-popup');
const signUpPopupTemplate = document.querySelector('#sign-up-popup');
const successPopupTemplate = document.querySelector('#success-popup');

//  Header
const menuButtonFavorites = document.querySelector('.menu__item_favorites');
const logoutIcon = document.querySelector('.header__logout-icon');
const userName = document.querySelector('.header__button-text');
const mobileMenuButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');

// Content

const cardsContainer = document.querySelector('.cards__container');
const cardsBlock = document.querySelector('.cards');
const preloader = document.querySelector('.preloader');
const notFoundBlock = document.querySelector('.not-found');

// Card
const bookmark = document.querySelector('#bookmark');
const months = ['Января', 'Февраля', 'Марта',
  'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
  'Сентября', 'Октября', 'Ноября', 'Декабря',
];

// Search
const searchButton = document.querySelector('.button_input');
const searchInput = document.querySelector('.search__input');

// Document
const overlay = document.querySelector('.overlay');

// Config
const API_KEY = 'b67c755a9da24588817dbb367e6797b7';
const API_URL = 'https://api.news-explorer.xyz';

export {
  authButton,
  closeButton,
  authPopupTemplate,
  popupContainer,
  popupContent,
  signUpPopupTemplate,
  successPopupTemplate,
  menuButtonFavorites,
  logoutIcon,
  userName,
  mobileMenuButton,
  menu,
  overlay,
  bookmark,
  API_KEY,
  cardsContainer,
  months,
  searchButton,
  searchInput,
  cardsBlock,
  preloader,
  notFoundBlock,
};
