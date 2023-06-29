import React, {
  useEffect,
  useState,
  useMemo,
  createContext,
} from 'react';
import PropTypes from 'prop-types';

import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';

export const gamesContext = createContext();
const gamesAPI = new GamesAPI();

function GamesContext({ children }) {
  const [games, setGames] = useState([]);
  const [gamesToShow, setGamesToShow] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  const getAllGames = async () => {
    setIsLoading(true);

    const gamesFounded = await gamesAPI.getAllGames();

    setIsLoading(false);

    if (gamesFounded instanceof ErrorCreator) {
      sendNotification(gamesFounded.customMessage, 'error');
    } else {
      setGames(gamesFounded);
      setGamesToShow(gamesFounded);
    }
  };

  const getAllCategories = async () => {
    setIsLoading(true);

    const categoriesFounded = await gamesAPI.getAllCategories();

    setIsLoading(false);

    if (categoriesFounded instanceof ErrorCreator) {
      sendNotification(categoriesFounded.customMessage, 'error');
    } else {
      setCategories(categoriesFounded);
    }
  };

  const searchByCategory = (category) => {
    const gamesSearched = games.filter((game) => game.category === category);

    setGamesToShow(gamesSearched);
  };

  const resetGamesToShow = () => {
    setGamesToShow(games);
  };

  const searchGameByName = (name) => {
    const gamesSearched = games.filter(
      (game) => game.title.toLowerCase().includes(name.toLowerCase()),
    );

    setGamesToShow(gamesSearched);
  };

  useEffect(() => {
    sendNotification(
      'Esse projeto utiliza uma api própria que foi publicada no Render gratuitamente e pode estar hibernando, então se não carregar, por favor recarrege a página até aparecer',
    );

    getAllGames();
    getAllCategories();
  }, []);

  const contextValues = useMemo(() => ({
    games,
    gamesToShow,
    setGames,
    categories,
    setCategories,
    getAllGames,
    getAllCategories,
    searchByCategory,
    resetGamesToShow,
    searchGameByName,
    setHasSearched,
    hasSearched,
    isLoading,
  }), [games, categories, gamesToShow]);

  return (
    <gamesContext.Provider value={contextValues}>
      {children}
    </gamesContext.Provider>
  );
}

GamesContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GamesContext;
