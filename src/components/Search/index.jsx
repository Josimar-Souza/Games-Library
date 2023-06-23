import React from 'react';
import {
  SearchContainer,
  SearchIcon,
  CustomInput,
} from './searchStyles';
import Button from '../Button';

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <CustomInput
        placeholder="Digite um termo para buscar"
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
