import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-width: ${({ borderwidth }) => borderwidth};
  border-radius: ${({ borderradius }) => borderradius};
  box-shadow: ${({ boxshadow }) => boxshadow};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};

  &:hover {
    color: ${({ color }) => color} !important;
  }

  @media only screen and (max-width: 512px) {
    margin: ${({ mobilemargin }) => mobilemargin};
    width: ${({ mobilewidth }) => mobilewidth};
  }
`;

export default CustomButton;
