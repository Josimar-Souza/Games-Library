import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-width: ${({ borderWidth }) => borderWidth};
  font-size: ${({ fontSize }) => fontSize};
`;

export default CustomButton;
