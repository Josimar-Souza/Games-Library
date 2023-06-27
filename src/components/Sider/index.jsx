import React, { useContext } from 'react';
import SiderContainer from './siderStyles';
import { gamesContext } from '../../context/gamesContext';
import Button from '../Button';

function Sider() {
  const { categories, searchByCategory } = useContext(gamesContext);

  const onCategoryClick = (category) => {
    searchByCategory(category);
  };

  return (
    <SiderContainer>
      {categories.map(({ category }) => (
        <Button
          margin="10px 0"
          background="rgba(255, 255, 255, 0.2)"
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
