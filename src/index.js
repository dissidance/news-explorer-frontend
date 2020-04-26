import './style.css';
import Popup from './blocks/popup/Popup';
import Header from './blocks/header/Header';
import SignInForm from './js/components/SignInForm';
import SignUpForm from './js/components/SignUpForm';
import NewsApi from './js/api/NewsApi';
import NewsCardList from './blocks/cards/NewsCardList';
import NewsCard from './blocks/card/NewsCard';
import MainApi from './js/api/MainApi';
import { togglePreloader } from './js/utils';
import {
  authButton,
  authPopupTemplate,
  mobileMenuButton,
  menu,
  overlay,
  searchButton,
  searchInput,
  cardsContainer,
  cardsBlock,
  notFoundBlock,
} from './js/constants';

const init = async () => {
  const mainApi = new MainApi('http://localhost:3000');
  const header = new Header();
  const signInForm = new SignInForm(header.render, mainApi);
  const signUpForm = new SignUpForm(mainApi);
  const popup = new Popup(signInForm, signUpForm);
  const card = new NewsCard();
  const cardList = new NewsCardList(card.createCard);

  const openMenu = () => {
    if (menu.classList.contains('menu_is-opened')) {
      menu.classList.remove('menu_is-opened');
      mobileMenuButton.style.backgroundImage = 'url(./images/menu.svg)';
      overlay.classList.remove('overlay_is-opened');
    } else {
      menu.classList.add('menu_is-opened');
      mobileMenuButton.style.backgroundImage = 'url(./images/close-mid.svg)';
      overlay.classList.add('overlay_is-opened');
    }
  };

  const openPopup = () => {
    menu.classList.remove('menu_is-opened');
    popup.setContent(authPopupTemplate);
    signInForm.init();
    popup.open();
  };

  const submitSearch = async (e) => {
    e.preventDefault();

    togglePreloader();

    cardsContainer.textContent = '';
    const newsApi = new NewsApi({ keyword: searchInput.value, dateFrom: '2020-04-17', dateTo: '2020-04-24' });

    const cards = await newsApi.getNews()
      .then((res) => res.articles)
      .catch((err) => console.log(err.message));

    if (cards.length === 0) {
      togglePreloader();
      return notFoundBlock.classList.add('not-found_is-opened');
    }

    cardList.renderResults(cards);
    cardsBlock.classList.add('cards_is-opened');
    searchInput.value = '';

    return togglePreloader();
  };

  mainApi.getUserData()
    .then((res) => {
      header.render({ isLoggedIn: true, userName: res.name });
    })
    .catch(() => {
      header.render({ isLoggedIn: false, userName: '' });
    });

  searchButton.addEventListener('click', submitSearch);
  authButton.addEventListener('click', openPopup);
  mobileMenuButton.addEventListener('click', openMenu);
};

init();
