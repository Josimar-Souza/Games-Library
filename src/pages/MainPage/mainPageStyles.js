import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #99DBF5;
  min-height: 100vh;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 80vh;
  width: 100%;
`;

export const GamesCardContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  margin-top: 120px;
  width: 80%;

  @media only screen and (max-width: 512px) {
    align-items: center;
    flex-direction: column;
    margin-top: 120px;
    width: 100%;
  }
`;

export const FeedbackMessage = styled.h1`

`;
