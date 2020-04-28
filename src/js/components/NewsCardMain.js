import NewsCard from '../../blocks/card/NewsCard';
import { bookmark, mainApi } from '../constants';
import { getUserData } from '../utils';

class NewsCardMain extends NewsCard {
  constructor(data, keyword) {
    super();
    this.data = data;
    this.data.keyword = keyword;
    this.isMarked = false;
    this.cardElement = this.createCard(this.data);
    this.mark = this.cardElement.querySelector('.mark');
    this.hint = this.cardElement.querySelector('.hint');
    this.mark.addEventListener('click', () => this.toggleMark(this.data));
    this.mark.addEventListener('mouseover', this.showHint);
    this.mark.addEventListener('mouseout', this.hideHint);
  }


  toggleMark = (data) => {
    const {
      title, description, publishedAt, source, url, urlToImage, keyword,
    } = data;

    if (this.mark.classList.contains('card__item_marked')) {
      mainApi.removeArticle(this.data._id)
        .then(() => this.mark.classList.remove('card__item_marked'))
        .catch((err) => console.log(err.message));
    } else {
      mainApi.createArticle({
        title,
        text: description,
        date: publishedAt,
        source: source.name,
        link: url,
        image: urlToImage,
        keyword,
      })
        .then((res) => {
          this.data._id = res._id;
          this.mark.classList.add('card__item_marked');
        })
        .catch((err) => console.log(err.message));
    }
  }

  hideHint = () => {
    this.hint.classList.add('card__item_hidden');
  }

  showHint = () => {
    if (!getUserData()) this.hint.classList.remove('card__item_hidden');
  }


  createCard = (data) => {
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
    if (data.urlToImage) cardImage.style.backgroundImage = `url(${data.urlToImage})`;
    cardDate.textContent = this.formatDateToView(data.publishedAt);
    cardTitle.textContent = data.title;
    cardSubtitle.textContent = data.description;
    cardSource.href = data.url;
    cardSource.target = '_blank';
    cardSource.textContent = data.source.name;

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

export default NewsCardMain;
