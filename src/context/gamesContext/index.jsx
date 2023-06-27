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

  const getAllGames = async () => {
    const gamesFounded = await gamesAPI.getAllGames();

    if (gamesFounded instanceof ErrorCreator) {
      sendNotification(gamesFounded.customMessage, 'error');
    } else {
      setGames(gamesFounded);
      setGamesToShow(gamesFounded);
    }
  };

  const getAllCategories = async () => {
    const categoriesFounded = await gamesAPI.getAllCategories();

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

  useEffect(() => {
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
