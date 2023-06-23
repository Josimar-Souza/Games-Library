import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle, CustomButton } from './headerStyles';

function Header({ title }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <CustomButton>Adicionar jogo</CustomButton>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
