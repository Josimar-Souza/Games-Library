import React, { useContext, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { SiderContainer, SiderMobileButton, Title } from './siderStyles';
import { gamesContext } from '../../context/gamesContext';
import Button from '../Button';

function Sider() {
  const {
    categories,
    searchByCategory,
    resetGamesToShow,
    hasSearched,
    setHasSearched,
    setPagination,
  } = useContext(gamesContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [siderAnimation, setSiderAnimation] = useState({ animation: false, animationDirection: 'reverse' });

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
    searchByCategory(category);
    setHasSearched(true);
    setPagination({ startIndex: 0, endIndex: 12, page: 1 });
  };

  const resetSearch = () => {
    setSelectedCategory('');
    setHasSearched(false);
    resetGamesToShow();
    setPagination({ startIndex: 0, endIndex: 12, page: 1 });
  };

  const onSiderButtonClick = () => {
    if (siderAnimation.animationDirection === 'reverse') {
      setSiderAnimation({ animation: true, animationDirection: 'normal' });
    } else {
      setSiderAnimation({ animation: true, animationDirection: 'reverse' });
    }
  };

  return (
    <SiderContainer
      animation={siderAnimation.animation}
      animationdirection={siderAnimation.animationDirection}
      onClick={onSiderButtonClick}
    >
      {isMobile
        ? (
          <SiderMobileButton>
            { siderAnimation.animationDirection === 'normal'
              ? <MenuUnfoldOutlined />
              : <MenuFoldOutlined />}
          </SiderMobileButton>
        ) : null}
      <Title>Categorias</Title>
      {hasSearched
        ? (
          <Button
            margin="10px 0"
            mobileMargin="10px 0"
            background="red"
            color="white"
            onClick={resetSearch}
            border="none"
          >
            Limpar busca
          </Button>
        ) : null}
      {categories.map(({ category, _id }) => (
        <Button
          key={_id}
          margin="10px 0"
          background="rgba(255, 255, 255, 0.2)"
          boxShadow={
            category === selectedCategory
              ? '0 0 5px blue'
              : '0 2px 5px rgba(0, 0, 0, 0.3)'
          }
          border="none"
          onClick={() => onCategoryClick(category)}
          mobileMargin="10px 0"
        >
          {category}
        </Button>
      ))}
    </SiderContainer>
  );
}

export default Sider;
