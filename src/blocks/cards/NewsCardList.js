import BaseComponent from '../../js/components/BaseComponent';
import { cardsContainer } from '../../js/constants';

class NewsCardList extends BaseComponent {
  constructor(cards, keyword, createCard) {
    super();
    this.createCard = createCard;
    this.keyword = keyword;
    this.cards = cards;
  }

  renderResults = () => {
    this.cards.forEach((card) => {
      cardsContainer.appendChild(this.createCard(card));
    });
  }

  addCard = (data) => {
    const { cardElement } = this.createCard(data);
    cardElement.dataset.id = data._id;
  }
}

export default NewsCardList;
