import BaseComponent from '../../js/components/BaseComponent';
import { months } from '../../js/constants';

class NewsCard extends BaseComponent {
  formatDateToView = (date) => {
    const standardDate = new Date(Date.parse(date));
    const day = standardDate.getDate();
    const month = months[standardDate.getMonth()];
    const year = standardDate.getFullYear();
    return `${day} ${month}, ${year}`;
  };
}

export default NewsCard;
