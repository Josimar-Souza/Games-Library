import React, { useContext } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { MainContainer, GamesCardContainer, MainContent } from './mainPageStyles';
import Header from '../../components/Header';
import Sider from '../../components/Sider';
import { gamesContext } from '../../context/gamesContext';
import GameCard from '../../components/GameCard';

function MainPage() {
  const { pathname } = useLocation();
  const { gamesToShow } = useContext(gamesContext);

  return (
    <MainContainer>
      <Header
        title="Games Library"
      />
      <MainContent>
        <Sider />
        {pathname === '/'
          ? (
            <GamesCardContainer>
              {gamesToShow.map(({ _id, ...game }) => (
                <GameCard key={_id} game={game} />
              ))}
            </GamesCardContainer>
          ) : <Outlet />}
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;
