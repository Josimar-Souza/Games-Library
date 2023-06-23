import React from 'react';
import {
  SearchContainer,
  SearchIcon,
  CustomInput,
  CustomButton,
} from './searchStyles';

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <CustomInput
        placeholder="Digite um termo para buscar"
      />
      <CustomButton>Buscar</CustomButton>
    </SearchContainer>
  );
}

export default Search;
