import BaseComponent from '../../js/components/BaseComponent';
import { bookmark } from '../../js/constants';

class NewsCard extends BaseComponent {
  constructor(title, description, source, url, date, imageUrl) {
    super();

    this.title = title;
    this.description = description;
    this.source = source;
    this.url = url;
    this.date = date;
    this.imageUrl = imageUrl;
  }

  createCard = (title, description, source, url, date, imageUrl) => {
    const card = document.createElement('div');
    const cardControl = document.createElement('div');
    const cardItemWrapperHint = document.createElement('div');
    const cardItemWrapper = document.createElement('div');
    const cardItem =

  }
}
