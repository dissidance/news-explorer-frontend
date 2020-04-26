import utils from './utils';

export default class MainApi {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  signup = (data) => utils.postData(`${this.endpoint}/signup`, data)

  signin = (data) => utils.postData(`${this.endpoint}/signin`, data)

  getUserData = () => utils.getData(`${this.endpoint}/users/me`)

  getArticles = () => utils.getData(`${this.endpoint}/articles`)

  createArticle = (data) => utils.postData(`${this.endpoint}/articles`, data)

  removeArticle = (id) => utils.deleteData(`${this.endpoint}/articles/${id}`)
}
