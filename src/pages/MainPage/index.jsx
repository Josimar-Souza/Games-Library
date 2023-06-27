import React from 'react';
import MainContent from './mainPageStyles';
import Header from '../../components/Header';
import Sider from '../../components/Sider';

function MainPage() {
  return (
    <MainContent>
      <Header
        title="Games Library"
      />
      <Sider />
    </MainContent>
  );
}

export default MainPage;
