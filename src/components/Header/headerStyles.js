import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #9AC5F4;
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
    height: 120px;
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
