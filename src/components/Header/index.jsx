import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle, VerticalDivider } from './headerStyles';
import Button from '../Button';
import Search from '../Search';
import GameFormModal from '../GameFormModal';

function Header({ title }) {
  const [addGameModal, setAddGameModal] = useState({ open: false, info: {} });
  const navigate = useNavigate();

  const onAddCloseGameClicked = (value) => {
    setAddGameModal({ ...addGameModal, open: value });
  };

  const onTitleClicked = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={onTitleClicked}>{title}</HeaderTitle>
      <VerticalDivider />
      <Search />
      <VerticalDivider />
      <Button
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
        onClick={() => onAddCloseGameClicked(true)}
      >
        Adicionar jogo
      </Button>
      <GameFormModal
        open={addGameModal.open}
        cancelCallback={onAddCloseGameClicked}
        title="Adicione um jogo"
        type="add"
      />
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
