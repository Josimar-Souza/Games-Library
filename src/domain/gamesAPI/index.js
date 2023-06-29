import axios from 'axios';
import ErrorCreator from '../../helpers/ErrorCreator';

const baseURL = import.meta.env.VITE_GAMES_API_URL;

class GamesAPI {
  constructor(timeout = 20000) {
    this.api = axios.create({
      timeout,
    });
  }

  async addNewCategory(category) {
    try {
      const { data } = await this.api.post(`${baseURL}/categories`, category);

      return data;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, `Não foi possível adicionar a categoria ${category.category}`);
    }
  }

  async getAllCategories() {
    try {
      const { data } = await this.api.get(`${baseURL}/categories`);

      return data.categories;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível listar todas as categorias, por favor, recarrega a página e tente novamente');
    }
  }

  async deleteCategoryById(categoryId) {
    try {
      const { data } = await this.api.delete(`${baseURL}/categories/${categoryId}`);

      return data;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível deletar a categoria');
    }
  }

  async getAllGames() {
    try {
      const { data } = await this.api.get(`${baseURL}/games`);

      return data.games;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível listar todos os games');
    }
  }

  async getGameById(gameId) {
    try {
      const { data } = await this.api.get(`${baseURL}/games/${gameId}`);

      return data.game;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível listar esse jogo');
    }
  }

  async addNewGame(newGame) {
    try {
      const { data } = await this.api.post(`${baseURL}/games`, newGame);

      return data;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível adicionar o jogo');
    }
  }

  async updateGame(newValues, gameId) {
    try {
      const { data } = await this.api.put(`${baseURL}/games/${gameId}`, newValues);

      return data;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível atualizar esse jogo');
    }
  }

  async deleteGameById(gameId) {
    try {
      const { data } = await this.api.delete(`${baseURL}/games/${gameId}`);

      return data;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, 'Não foi possível deletar esse jogo');
    }
  }

  async getGamesByCategory(category) {
    try {
      const { data } = await this.api.get(`${baseURL}/games/category/${category}`);

      return data;
    } catch (e) {
      if (e.response) {
        const { response: { data: { message } } } = e;

        return new ErrorCreator(e, message);
      }

      return new ErrorCreator(null, `Não foi possível listar jogos com a categoria ${category}`);
    }
  }
}

export default GamesAPI;
