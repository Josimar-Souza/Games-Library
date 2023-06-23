import styled from 'styled-components';
import { Input } from 'antd';
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

export const CustomInput = styled(Input)`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  width: 70%;
`;
