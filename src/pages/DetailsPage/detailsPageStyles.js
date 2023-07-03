import styled from 'styled-components';
import { LeftCircleOutlined } from '@ant-design/icons';

const getInfoWidth = ({ width }) => {
  if (width) return width;

  return '85%';
};

export const DetailsContainer = styled.main`
  align-items: center;
  background-image: url(${({ image }) => image});
  background-size: cover;
  display: flex;
  margin-top: 100px;
  min-height: 88vh;
  justify-content: center;
  padding: 20px;
  position: relative;
  width: 80%;

  @media only screen and (max-width: 512px) {
    margin-top: 120px;
    padding: 10px;
    width: 100%;
  }
`;

export const BackButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 80px
`;

export const CustomBackIcon = styled(LeftCircleOutlined)`
  font-size: 30px;
  color: white;
`;

export const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  display: flex;
  min-height: 250px;
  padding: 10px;
  width: 90%;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InfoSider = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 40%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  border-radius: 15px;
  width: 50%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 22px;
  margin: ${({ margin }) => margin};;
`;

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 60%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const Info = styled.p`
  color: white;
  line-height: 22px;
  text-align: center;
  width: ${getInfoWidth};
`;

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const HorizontalDivider = styled.div`
  background: rgba(255, 255, 255, 0.3);
  height: 1px;
  margin: 20px 0;
  width: 85%;
`;

export const PlatformsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 180px;
  width: 100%;
`;

export const VerticalDivider = styled.div`
  align-self: stretch;
  background: rgba(255, 255, 255, 0.3);
  width: 1px;
`;

export const TrailerView = styled.iframe`
  min-height: 250px;
  width: 80%;

  @media only screen and (max-width: 512px) {
    min-height: 230px;
    width: 95%;
  }
`;

export const MetacriticScore = styled.p`
  background-color: ${({ background }) => background};
  border-radius: 50%;
  color: black;
  display: inline;
  margin-left: 10px;
  padding: 5px;
  width: 10%;
`;
