import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import {
  HeaderContainer,
  HeaderTitle,
  VerticalDivider,
  CustomPlusIcon,
  AddButtonContainer,
} from './headerStyles';
import Button from '../Button';
import Search from '../Search';
import GameFormModal from '../GameFormModal';
import Pagination from '../Pagination';
import { gamesContext } from '../../context/gamesContext';

function Header({ title }) {
  const [addGameModal, setAddGameModal] = useState({ open: false, info: {} });
  const navigate = useNavigate();
  const { gamesToShow } = useContext(gamesContext);

  const onAddCloseGameClicked = (value) => {
    setAddGameModal({ ...addGameModal, open: value });
  };

  const onTitleClicked = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      {!isMobile
        ? <HeaderTitle onClick={onTitleClicked}>{title}</HeaderTitle>
        : null }
      {!isMobile ? <VerticalDivider /> : null}
      <Search />
      {!isMobile ? <VerticalDivider /> : null}
      <AddButtonContainer>
        <Button
          background="green"
          border="none"
          boxShadow="none"
          onClick={() => onAddCloseGameClicked(true)}
          icon={<CustomPlusIcon />}
        />
      </AddButtonContainer>
      {isMobile
        ? (
          <Pagination
            defaultCurrent={1}
            pageSize={12}
            total={gamesToShow.length}
          />
        ) : null}
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
