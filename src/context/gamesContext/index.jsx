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
  const [fetchedRight, setFetchedRight] = useState(true);
  const [pagination, setPagination] = useState({ startIndex: 0, endIndex: 12, page: 1 });
  const [pageGames, setPageGames] = useState([]);

  const getAllGames = async () => {
    setIsLoading(true);

    const gamesFounded = await gamesAPI.getAllGames();

    setIsLoading(false);

    if (gamesFounded instanceof ErrorCreator) {
      setFetchedRight(false);
    } else {
      setGames(gamesFounded);
      setGamesToShow(gamesFounded);
      setFetchedRight(true);
    }
  };

  const getAllCategories = async () => {
    setIsLoading(true);

    const categoriesFounded = await gamesAPI.getAllCategories();

    setIsLoading(false);

    if (categoriesFounded instanceof ErrorCreator) {
      setFetchedRight(false);
    } else {
      setCategories(categoriesFounded);
      setFetchedRight(true);
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
      'Esse projeto utiliza uma api própria que foi publicada no Render gratuitamente e pode estar hibernando, por isso o carregamento pode demorar um pouco na primeira vez',
    );

    getAllGames();
    getAllCategories();
  }, []);

  useEffect(() => {
    if (!fetchedRight) {
      if (games.length === 0 || categories.length === 0) {
        getAllGames();
        getAllCategories();
      }
    }
  }, [fetchedRight]);

  const getPageGames = () => {
    const currPageGames = gamesToShow.slice(pagination.startIndex, pagination.endIndex);

    setPageGames(currPageGames);
  };

  useEffect(() => {
    getPageGames();
  }, [gamesToShow, pagination.startIndex, pagination.endIndex]);

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
    pageGames,
    setPagination,
  }), [games, categories, gamesToShow, pageGames]);

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
