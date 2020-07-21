import { API_KEY } from '../constants';

class NewsApi {
  constructor(options) {
    Object.assign(this, options);
    this.url = `https://praktikum.tk/news/v2/everything?q=${this.keyword}&from=${this.dateFrom}&to=${this.dateTo}&pageSize=3&sortBy=popularity&apiKey=${API_KEY}`;
  }

  getNews = (skip) => fetch(`${this.url}&page=${skip}`, {
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
