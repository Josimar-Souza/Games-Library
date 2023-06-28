import styled from 'styled-components';
import { LeftCircleOutlined } from '@ant-design/icons';

export const DetailsContainer = styled.main`
  background-image: url(${({ image }) => image});
  background-size: cover;
  height: 88vh;
  width: 100%;
`;

export const BackButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
  left: 10px;
  position: relative;
  top: 10px;
  width: 80px
`;

export const CustomBackIcon = styled(LeftCircleOutlined)`
  font-size: 30px;
`;
