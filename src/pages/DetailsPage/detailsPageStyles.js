import styled from 'styled-components';

const DetailsContainer = styled.main`
  background-image: url(${({ image }) => image});
  background-size: cover;
  height: 88vh;
  width: 100%;
`;

export default DetailsContainer;
