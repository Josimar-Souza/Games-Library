import styled from 'styled-components';

export const SpinContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height};
  justify-content: center;
  margin: ${({ margin }) => margin};
  min-height: 50px;
  padding: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  z-index: 2;
`;

export const SpinTip = styled.p`
  margin-top: 10px;
`;
