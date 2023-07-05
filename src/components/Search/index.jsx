import React, { useState, useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
  SearchContainer,
  SearchIcon,
  SearchPageContainer,
} from './searchStyles';
import Button from '../Button';
import Input from '../Input';
import { gamesContext } from '../../context/gamesContext';
import Pagination from '../Pagination';

function Search() {
  const { searchGameByName, setHasSearched, gamesToShow } = useContext(gamesContext);
  const [name, setName] = useState('');

  useEffect(() => {
    searchGameByName(name);
  }, [name]);

  const onInputChange = ({ target: { value } }) => {
    setName(value);
  };

  const onSearchClicked = () => {
    searchGameByName(name);
    setHasSearched(true);
  };

  return (
    <SearchPageContainer>
      <SearchContainer>
        {!isMobile ? <SearchIcon /> : null}
        <Input
          placeholder="Digite um termo para buscar"
          width="80%"
          background="none"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          onChange={onInputChange}
          mobileWidth="65%"
        />
        <Button
          background="none"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          fontSize="14px"
          onClick={onSearchClicked}
          mobileMargin="0 20px 0 0"
        >
          Buscar
        </Button>
      </SearchContainer>
      <Pagination
        total={gamesToShow.length}
        pageSize={12}
        defaultCurrent={1}
      />
    </SearchPageContainer>
  );
}

export default Search;
