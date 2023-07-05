import styled, { keyframes } from 'styled-components';

const getHidePosition = () => ((80 * window.innerWidth) / 100);

const EnterSiderAnimation = keyframes`
  from { left: -${getHidePosition() - 15}px; }
  to { left: 0; }
`;

const ExitSiderAnimation = keyframes`
  from { left: 0; }
  to { left: -${getHidePosition() - 15}px; }
`;

const getAnimation = ({ animation, animationdirection }) => {
  if (animation && animationdirection === 'normal') return EnterSiderAnimation;

  if (animation && animationdirection === 'reverse') return ExitSiderAnimation;

  return '';
};

export const SiderContainer = styled.div`
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  left: 0;
  margin-top: 140px;
  min-height: 85vh;
  position: fixed;
  width: 20%;

  @media only screen and (max-width: 512px) {
    background-color: #9AC5F4;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    left: -${getHidePosition() - 15}px;
    margin-top: 10px;
    padding: 10px;
    top: 50px;
    width: 75%;
    z-index: 1;

    animation-name: ${getAnimation};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;

export const SiderMobileButton = styled.div`
  height: 50px;
  display: flex;
  font-size: 40px;
  justify-content: center;
  position: absolute;
  right: -60px;
  top: 0;
  width: 50px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;
