import React, { useState, useContext } from 'react';
import {
  SearchContainer,
  SearchIcon,
} from './searchStyles';
import Button from '../Button';
import Input from '../Input';
import { gamesContext } from '../../context/gamesContext';

function Search() {
  const { searchGameByName } = useContext(gamesContext);
  const [name, setName] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setName(value);
  };

  const onSearchClicked = () => {
    searchGameByName(name);
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <Input
        placeholder="Digite um termo para buscar"
        width="80%"
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
        onChange={onInputChange}
      />
      <Button
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
        fontSize="14px"
        onClick={onSearchClicked}
      >
        Buscar
      </Button>
    </SearchContainer>
  );
}

export default Search;
