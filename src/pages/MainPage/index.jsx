import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import {
  MainContainer,
  GamesCardContainer,
  MainContent,
  FeedbackMessage,
} from './mainPageStyles';
import Header from '../../components/Header';
import Sider from '../../components/Sider';
import { gamesContext } from '../../context/gamesContext';
import GameCard from '../../components/GameCard';
import Loading from '../../components/Loading';

function MainPage() {
  const { pathname } = useLocation();
  const { gamesToShow, isLoading } = useContext(gamesContext);
  const [pagination, setPagination] = useState({ startIndex: 0, endIndex: 12, page: 1 });
  const [games, setGames] = useState([]);

  const getPageGames = () => {
    const pageGames = gamesToShow.slice(pagination.startIndex, pagination.endIndex);
    console.log(pageGames);
    setGames(pageGames);
  };

  useEffect(() => {
    getPageGames();
  }, [gamesToShow]);

  return (
    <MainContainer>
      <Header
        title="Games Library"
      />
      <MainContent>
        {isLoading
          ? (
            <Loading
              tip="Carregando..."
              size="large"
            />
          ) : (
            <>
              <Sider />
              {pathname === '/'
                ? (
                  <GamesCardContainer>
                    {gamesToShow.length === 0
                      ? (
                        <FeedbackMessage>Nenhum jogo encontrado!</FeedbackMessage>
                      ) : (
                        games.map(({ _id, ...game }) => (
                          <GameCard key={_id} game={game} _id={_id} />
                        ))
                      )}
                  </GamesCardContainer>
                ) : <Outlet />}
            </>
          )}
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;
