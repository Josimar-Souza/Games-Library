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
  const [categories, setCategories] = useState([]);

  const getAllGames = async () => {
    const gamesFounded = await gamesAPI.getAllGames();

    if (gamesFounded instanceof ErrorCreator) {
      sendNotification(gamesFounded.customMessage, 'error');
    } else {
      setGames(gamesFounded);
    }
  };

  useEffect(() => {
    getAllGames();
  }, []);

  const contextValues = useMemo(() => ({
    games,
    setGames,
    categories,
    setCategories,
    getAllGames,
  }), [games, categories]);

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
