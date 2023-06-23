import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-width: ${({ borderwidth }) => borderwidth};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};

  &:hover {
    color: ${({ color }) => color} !important;
  }
`;

export default CustomButton;
