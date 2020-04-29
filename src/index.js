import './style.css';
import Popup from './blocks/popup/Popup';
import Header from './blocks/header/Header';
import SignInForm from './js/components/SignInForm';
import SignUpForm from './js/components/SignUpForm';
import NewsApi from './js/api/NewsApi';
import NewsCardMain from './js/components/NewsCardMain';
import MainApi from './js/api/MainApi';
import { togglePreloader, openErrorBlock } from './js/utils';
import {
  authButton,
  authPopupTemplate,
  mobileMenuButton,
  showMoreButton,
  menu,
  overlay,
  searchForm,
  searchInput,
  cardsContainer,
  cardsBlock,
  notFoundBlock,
  API_URL,
  NOT_FOUND_MESSAGES,
  SERVER_ERROR_MESSAGES,
} from './js/constants';

const initMainPage = async () => {
  const mainApi = new MainApi(API_URL);
  const header = new Header();
  await mainApi.getUserData()
    .then((res) => {
      localStorage.setItem('userData', JSON.stringify(res));
      header.render({ isLoggedIn: true, userName: res.name });
    })
    .catch(() => {
      header.render({ isLoggedIn: false, userName: '' });
      localStorage.setItem('userData', '');
    });
  const signInForm = new SignInForm(header.render, mainApi);
  const signUpForm = new SignUpForm(mainApi);
  const popup = new Popup(signInForm, signUpForm);
  const showArticles = 3;
  const todayDate = new Date();
  const todayDateFormated = todayDate.toISOString().slice(0, 10);
  const daysFromNumber = 7;
  const dateFromFormated = new Date(todayDate.setDate(todayDate.getDate() - daysFromNumber))
    .toISOString().slice(0, 10);
  let skip = 1;
  searchInput.value = '';

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

  const openPopup = async () => {
    if (localStorage.getItem('userData')) {
      const { _id } = JSON.parse(localStorage.getItem('userData'));

      await mainApi.logout({ _id })
        .then(() => {
          header.render({ isLoggedIn: false, userName: '' });
          localStorage.setItem('userData', '');
          cardsContainer.textContent = '';
          cardsBlock.classList.remove('cards_is-opened');
        })
        .catch((err) => err.message);
      return;
    }

    menu.classList.remove('menu_is-opened');
    popup.setContent(authPopupTemplate);
    signInForm.init();
    popup.open();
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    togglePreloader(true);
    const newsApi = new NewsApi({
      keyword: searchInput.value,
      dateFrom: dateFromFormated,
      dateTo: todayDateFormated,
    });
    cardsBlock.classList.remove('cards_is-opened');

    notFoundBlock.classList.remove('not-found_is-opened');

    showMoreButton.classList.remove('cards__button_is-visible');
    cardsContainer.textContent = '';
    skip = 1;
    newsApi.getNews(skip)
      .then((res) => {
        if (res.articles.length === 0) {
          openErrorBlock(
            notFoundBlock,
            NOT_FOUND_MESSAGES.title,
            NOT_FOUND_MESSAGES.description,
          );
          togglePreloader(false);
          return;
        }
        if (res.articles.length >= showArticles) showMoreButton.classList.add('cards__button_is-visible');
        res.articles.forEach((card) => {
          const { cardElement } = new NewsCardMain(card, searchInput.value);
          cardsContainer.appendChild(cardElement);
        });
        cardsBlock.classList.add('cards_is-opened');
      })
      .catch(() => {
        openErrorBlock(
          notFoundBlock,
          SERVER_ERROR_MESSAGES.title,
          SERVER_ERROR_MESSAGES.description,
        );
        togglePreloader(false);
      });

    setTimeout(() => {
      togglePreloader(false);
    }, 1000);
  };

  const showMoreHandler = () => {
    skip += 3;
    const newsApi = new NewsApi({
      keyword: searchInput.value,
      dateFrom: dateFromFormated,
      dateTo: todayDateFormated,
    });
    newsApi.getNews(skip)
      .then((res) => {
        if (res.articles < showArticles) {
          showMoreButton.classList.remove('cards__button_is-visible');
        }
        res.articles.forEach((card) => {
          const { cardElement } = new NewsCardMain(card, searchInput.value);
          cardsContainer.appendChild(cardElement);
        });
        return res.articles;
      })
      .catch(() => {
        openErrorBlock(
          notFoundBlock,
          SERVER_ERROR_MESSAGES.title,
          SERVER_ERROR_MESSAGES.description,
        );
        togglePreloader();
      });
  };


  searchForm.addEventListener('submit', (e) => submitSearch(e));
  authButton.addEventListener('click', openPopup);
  mobileMenuButton.addEventListener('click', openMenu);
  showMoreButton.addEventListener('click', showMoreHandler);
};

initMainPage();
