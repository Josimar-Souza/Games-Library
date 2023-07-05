import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #9AC5F4;
  display: flex;
  justify-content: space-evenly;
  min-height: 120px;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
    min-height: 150px;
    position: fixed;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  font-family: 'Kablammo', cursive;

  &:hover {
    cursor: pointer;
  }
`;

export const VerticalDivider = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 90%;
  width: 1px;
`;

export const CustomPlusIcon = styled(PlusOutlined)`
  color: white;
`;

export const AddButtonContainer = styled.div`
  @media only screen and (max-width: 512px) {
    position: fixed;
    right: 15px;
    bottom: 15px;
  }
`;
