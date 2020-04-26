import { API_KEY } from '../constants';

class NewsApi {
  constructor(options) {
    Object.assign(this, options);
    this.url = `https://newsapi.org/v2/everything?q=${this.keyword}&from=${this.dateFrom}&to=${this.dateTo}&pageSize=100&sortBy=popularity&apiKey=${API_KEY}`;
  }

  getNews = () => fetch(this.url, {
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Ошибка');
    })
    .catch((err) => {
      throw new Error(err.message);
    })
}

export default NewsApi;
