import styled from 'styled-components';

export const GameCardContainer = styled.div`
  align-items: center;
  background-color: #9AC5F4;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 430px;
  padding: 10px;
  margin: 10px 0;
  width: 15%;

  @media only screen and (max-width: 512px) {
    width: 65%;
  }
`;

export const ImageContainer = styled.div`
  height: 250px;
  width: 85%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;
`;

export const CardInfo = styled.p`
  font-size: 14px;
`;
