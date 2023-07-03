import styled from 'styled-components';
import { Input, Form } from 'antd';

export const CustomFormItem = styled(Form.Item)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};

  @media only screen and (max-width: 512px) {
    width: ${({ mobilewidth }) => mobilewidth};
  }
`;

export const CustomInput = styled(Input)`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-width: ${({ borderwidth }) => borderwidth};
  border-radius: ${({ borderradius }) => borderradius};
  width: 100%;

  &:hover {
    border-width: ${({ borderwidth }) => borderwidth};
  }
`;

export const Label = styled.p`
  font-size: ${({ labelfontsize }) => labelfontsize};
`;
