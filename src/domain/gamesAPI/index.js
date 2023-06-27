import axios from 'axios';
import ErrorCreator from '../../helpers/ErrorCreator';

const baseURL = import.meta.env.VITE_GAMES_API_URL;

class GamesAPI {
  constructor(timeout = 15000) {
    this.api = axios.create({
      timeout,
    });
  }

  async addNewCategory(category) {
    try {
      const { data } = await this.api.post(`${baseURL}/categories`, category);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async getAllCategories() {
    try {
      const { data } = await this.api.get(`${baseURL}/categories`);

      return data.categories;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async deleteCategoryById(categoryId) {
    try {
      const { data } = await this.api.delete(`${baseURL}/categories/${categoryId}`);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async getAllGames() {
    try {
      const { data } = await this.api.get(`${baseURL}/games`);

      return data.games;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async getGameById(gameId) {
    try {
      const { data } = await this.api.get(`${baseURL}/games/${gameId}`);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async addNewGame(newGame) {
    try {
      const { data } = await this.api.post(`${baseURL}/games`, newGame);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async updateGame(newValues, gameId) {
    try {
      const { data } = await this.api.put(`${baseURL}/games/${gameId}`, newValues);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async deleteGameById(gameId) {
    try {
      const { data } = await this.api.delete(`${baseURL}/games/${gameId}`);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }

  async getGamesByCategory(category) {
    try {
      const { data } = await this.api.get(`${baseURL}/games/category/${category}`);

      return data;
    } catch (e) {
      const { response: { data: { message } } } = e;

      return new ErrorCreator(e, message);
    }
  }
}

export default GamesAPI;
