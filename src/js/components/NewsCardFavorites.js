import NewsCard from '../../blocks/card/NewsCard';
import { trash, mainApi } from '../constants';

class NewsCardFavorires extends NewsCard {
  constructor(data) {
    super();
    this.data = data;
    this.cardElement = this.createCard(this.data);
    this.control = this.cardElement.querySelector('.card__control');
    this.keyword = this.cardElement.querySelector('.card__item_keyword');
    this.control.addEventListener('click', this.deleteCard);
    this.cardElement.addEventListener('click', this.moveToSource);
  }


  deleteCard = () => {
    mainApi.removeArticle(this.data._id)
      .then(() => {
        this.cardElement.parentNode.removeChild(this.cardElement);
      })
      .catch((err) => console.log(err.message));
  }

  moveToSource = (e) => {
    if (e.target.classList.contains('card__control')
      || e.target.classList.contains('card__item-wrapper')
      || e.target.classList.contains('path')
      || e.target.classList.contains('trash')) return;
    window.open(this.data.link, '_blank');
  }

  createCard = (data) => {
    const card = document.createElement('div');
    const cardControl = document.createElement('div');
    const cardItemWrapperKeyword = document.createElement('div');
    const cardItemWrapper = document.createElement('div');
    const cardItem = trash.cloneNode(true).content;
    const cardImage = document.createElement('div');
    const cardDate = document.createElement('p');
    const cardTitle = document.createElement('h3');
    const cardSubtitle = document.createElement('p');
    const cardSource = document.createElement('a');

    card.classList.add('card');
    card.setAttribute('id', data._id);
    cardControl.classList.add('card__control');
    cardItemWrapperKeyword.classList.add('card__item-wrapper', 'card__item', 'card__item_keyword');
    cardItemWrapper.classList.add('card__item-wrapper');
    cardImage.classList.add('card__image');
    cardDate.classList.add('card__date');
    cardTitle.classList.add('card__title');
    cardSubtitle.classList.add('card__subtitle');
    cardSource.classList.add('card__source');

    cardItemWrapperKeyword.textContent = data.keyword;
    if (data.image) cardImage.style.backgroundImage = `url(${data.image})`;
    cardDate.textContent = this.formatDateToView(data.date);
    cardTitle.textContent = data.title;
    cardSubtitle.textContent = data.text;
    cardSource.href = data.link;
    cardSource.target = '_blank';
    cardSource.textContent = data.source;

    cardItemWrapper.appendChild(cardItem);
    cardControl.appendChild(cardItemWrapper);
    card.appendChild(cardItemWrapperKeyword);
    card.appendChild(cardControl);
    card.appendChild(cardImage);
    card.appendChild(cardDate);
    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardSource);

    return card;
  }
}

export default NewsCardFavorires;
