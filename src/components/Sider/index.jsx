import React, { useContext, useState } from 'react';
import SiderContainer from './siderStyles';
import { gamesContext } from '../../context/gamesContext';
import Button from '../Button';

function Sider() {
  const { categories, searchByCategory, resetGamesToShow } = useContext(gamesContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
    searchByCategory(category);
  };

  const resetSearch = () => {
    setSelectedCategory('');
    resetGamesToShow();
  };

  return (
    <SiderContainer>
      {selectedCategory !== ''
        ? (
          <Button
            margin="10px 0"
            background="red"
            color="white"
            onClick={resetSearch}
            border="none"
          >
            Limpar busca por categoria
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
        >
          {category}
        </Button>
      ))}
    </SiderContainer>
  );
}

export default Sider;
