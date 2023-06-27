import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { MainContainer, GamesCardContainer, MainContent } from './mainPageStyles';
import Header from '../../components/Header';
import Sider from '../../components/Sider';

function MainPage() {
  const { pathname } = useLocation();

  return (
    <MainContainer>
      <Header
        title="Games Library"
      />
      <MainContent>
        <Sider />
        {pathname === '/'
          ? (
            <GamesCardContainer />
          ) : <Outlet />}
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;
