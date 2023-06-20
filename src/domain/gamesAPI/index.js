import axios from 'axios';
import ErrorCreator from '../../helpers/ErrorCreator';

const baseURL = import.meta.env.VITE_GAMES_API_URL;

class GamesAPI {
  constructor(timeout = 15000) {
    this.api = axios.create({
      timeout,
    });
  }

  async getAllGames() {
    try {
      const { data } = await this.api.get(`${baseURL}/games`);

      return data;
    } catch (e) {
      const { data: { message } } = e;

      return new ErrorCreator(e, message);
    }
  }
}

export default GamesAPI;
