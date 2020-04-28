import NewsCard from '../../blocks/card/NewsCard';
import { bookmark } from '../constants';

class NewsCardFavorites extends NewsCard {
  createCard = ({
    title, description, source, url, publishedAt, urlToImage,
  }) => {
    const card = document.createElement('div');
    const cardControl = document.createElement('div');
    const cardItemWrapperHint = document.createElement('div');
    const cardItemWrapper = document.createElement('div');
    const cardItem = bookmark.cloneNode(true).content;
    const cardImage = document.createElement('div');
    const cardDate = document.createElement('p');
    const cardTitle = document.createElement('h3');
    const cardSubtitle = document.createElement('p');
    const cardSource = document.createElement('a');

    card.classList.add('card');
    cardControl.classList.add('card__control');
    cardItemWrapperHint.classList.add('card__item-wrapper', 'card__item', 'card__item_hidden', 'hint');
    cardItemWrapper.classList.add('card__item-wrapper');
    cardImage.classList.add('card__image');
    cardDate.classList.add('card__date');
    cardTitle.classList.add('card__title');
    cardSubtitle.classList.add('card__subtitle');
    cardSource.classList.add('card__source');

    cardItemWrapperHint.textContent = 'Войдите, чтобы сохранять статьи';
    if (urlToImage) cardImage.style.backgroundImage = `url(${urlToImage})`;
    cardDate.textContent = this.formatDateToView(publishedAt);
    cardTitle.textContent = title;
    cardSubtitle.textContent = description;
    cardSource.href = url;
    cardSource.target = '_blank';
    cardSource.textContent = source.name;

    cardItemWrapper.appendChild(cardItem);
    cardControl.appendChild(cardItemWrapperHint);
    cardControl.appendChild(cardItemWrapper);
    card.appendChild(cardControl);
    card.appendChild(cardImage);
    card.appendChild(cardDate);
    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardSource);

    return card;
  }
}

export default NewsCardFavorites;
