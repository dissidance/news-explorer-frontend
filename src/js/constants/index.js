import MainApi from '../api/MainApi';

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

// Error block

const errorTitle = document.querySelector('.not-found__heading');
const errorDescription = document.querySelector('.text_color_grey');

// Card

const bookmark = document.querySelector('#bookmark');
const trash = document.querySelector('#trash');
const months = ['Января', 'Февраля', 'Марта',
  'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
  'Сентября', 'Октября', 'Ноября', 'Декабря',
];

// Search

const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');

// Document

const overlay = document.querySelector('.overlay');

// API
const API_KEY = 'b67c755a9da24588817dbb367e6797b7';
const API_URL = 'https://api.news-explorer.xyz';
const MAIN_URL = window.location.origin;
const mainApi = new MainApi(API_URL);

// Error messages
const NOT_FOUND_MESSAGES = {
  title: 'Ничего не найдено',
  description: 'К сожалению по вашему запросу ничего не найдено',
};
const SERVER_ERROR_MESSAGES = {
  title: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.',
  description: 'Подождите немного и попробуйте ещё раз',
};

// Favorites

const statsHeading = document.querySelector('.stats__heading');
const statsKeywords = document.querySelector('.stats__keywords');
const keywordsMain = document.querySelector('#keywordsMain');
const keywordsBetween = document.querySelector('#keywordsBetween');
const keywordsOthers = document.querySelector('#keywordsOthers');
const showMoreButton = document.querySelector('#show-more-button');

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
  searchForm,
  searchInput,
  cardsBlock,
  preloader,
  notFoundBlock,
  API_URL,
  errorTitle,
  errorDescription,
  NOT_FOUND_MESSAGES,
  SERVER_ERROR_MESSAGES,
  MAIN_URL,
  mainApi,
  statsHeading,
  statsKeywords,
  keywordsMain,
  keywordsBetween,
  keywordsOthers,
  trash,
  showMoreButton,
};
