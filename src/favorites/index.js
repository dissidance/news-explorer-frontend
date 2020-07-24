import './style.css';
import {
  MAIN_URL,
  authButton,
  mainApi,
  statsHeading,
  keywordsMain,
  keywordsBetween,
  keywordsOthers,
  cardsContainer,
  mobileMenuButton,
  menu,
  overlay,
} from '../js/constants';

import Header from '../blocks/header/Header';
import NewsCardFavorites from '../js/components/NewsCardFavorites';


const logout = () => {
  const { _id } = JSON.parse(localStorage.getItem('userData'));

  mainApi.logout({ _id })
    .then(() => {
      localStorage.setItem('userData', '');
      window.location.assign(MAIN_URL);
    })
    .catch((err) => err.message);
};

const renderTitle = (cardsNumber) => {
  const user = JSON.parse(localStorage.getItem('userData'));
  statsHeading.textContent = `${user.name}, у вас ${cardsNumber} сохраненных статей`;
};


const openMenu = () => {
  if (menu.classList.contains('menu_is-opened')) {
    menu.classList.remove('menu_is-opened');
    mobileMenuButton.style.backgroundImage = 'url(./images/menu-black.svg)';
    overlay.classList.remove('overlay_is-opened');
  } else {
    menu.classList.add('menu_is-opened');
    mobileMenuButton.style.backgroundImage = 'url(./images/close-mid-black.svg)';
    overlay.classList.add('overlay_is-opened');
  }
};
const renderKeywords = (cards) => {
  if (!cards.length) return;
  // statsKeywords.textContent = `По ключевым словам: ${cards.length}`;
  const keywordsSet = new Set(cards.map((x) => x.keyword));
  const keywords = [...keywordsSet];
  let str1;
  let str2;
  if (keywords.length > 3) {
    str1 = `${keywords[0]}, ${keywords[1]}`;
    keywords.splice(0, 2);
    str2 = keywords.length > 0 ? `${keywords.length} другим` : '';
    keywordsMain.textContent = str1;
    keywordsBetween.textContent = 'и';
    keywordsOthers.textContent = str2;
  } else {
    str1 = keywords.slice(0, -1).reduce((acc, curr) => {
      // eslint-disable-next-line no-param-reassign
      acc += `${curr}, `;
      return acc;
    }, '');
    str1 += keywords[keywords.length - 1];
    keywordsMain.textContent = str1;
    keywordsBetween.textContent = '';
    keywordsOthers.textContent = '';
  }
};

const init = async () => {
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

  await mainApi.getArticles()
    .then((res) => {
      renderTitle(res.length);
      renderKeywords(res);
      res.reverse().forEach((card) => {
        const { cardElement } = new NewsCardFavorites(card);
        cardsContainer.appendChild(cardElement);
      });
    })
    .catch((err) => err.message);

  mobileMenuButton.addEventListener('click', openMenu);
  authButton.addEventListener('click', logout);
};
init();
