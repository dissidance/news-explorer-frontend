import BaseComponent from '../../js/components/BaseComponent';
import { cardsContainer } from '../../js/constants';

class NewsCardList extends BaseComponent {
  constructor(createCard) {
    super();
    this.createCard = createCard;
  }

  renderResults = (array) => {
    array.forEach((card) => {
      cardsContainer.appendChild(this.createCard(card));
    });
  }
}

export default NewsCardList;
