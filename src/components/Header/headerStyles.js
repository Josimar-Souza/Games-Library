import styled from 'styled-components';
import { Button } from 'antd';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #9AC5F4;
  display: flex;
  justify-content: space-evenly;
  min-height: 100px;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  font-family: 'Kablammo', cursive;
`;

export const CustomButton = styled(Button)`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  height: fit-content;
`;
