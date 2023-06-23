import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle, CustomButton } from './headerStyles';
import Search from '../Search';

function Header({ title }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Search />
      <CustomButton>Adicionar jogo</CustomButton>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
