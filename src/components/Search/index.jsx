import React from 'react';
import {
  SearchContainer,
  SearchIcon,
} from './searchStyles';
import Button from '../Button';
import Input from '../Input';

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <Input
        placeholder="Digite um termo para buscar"
        width="70%"
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
      />
      <Button
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
        fontSize="14px"
      >
        Buscar
      </Button>
    </SearchContainer>
  );
}

export default Search;
