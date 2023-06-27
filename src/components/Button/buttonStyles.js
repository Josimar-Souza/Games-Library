import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-width: ${({ borderwidth }) => borderwidth};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};

  &:hover {
    color: ${({ color }) => color} !important;
  }
`;

export default CustomButton;
