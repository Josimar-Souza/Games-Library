import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-height: 50px;
  width: 50%;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 22px;
`;
