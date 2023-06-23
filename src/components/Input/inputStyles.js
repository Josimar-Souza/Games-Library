import styled from 'styled-components';
import { Input, Form } from 'antd';

export const CustomFormItem = styled(Form.Item)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export const CustomInput = styled(Input)`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-width: ${({ borderWidth }) => borderWidth};
  width: 100%;
`;

export const Label = styled.p`
  font-size: ${({ labelFontSize }) => labelFontSize};
`;
