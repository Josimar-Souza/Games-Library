import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const SearchPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 50%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 100%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 22px;
`;
