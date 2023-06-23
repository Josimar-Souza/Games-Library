import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle } from './headerStyles';
import Button from '../Button';
import Search from '../Search';

function Header({ title }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Search />
      <Button
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
      >
        Adicionar jogo
      </Button>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
