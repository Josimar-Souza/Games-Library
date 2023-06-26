import styled from 'styled-components';
import { Select, Form } from 'antd';

export const SelectFormItem = styled(Form.Item)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export const CustomSelect = styled(Select)`
  width: 100%;
`;

export const CustomLabel = styled.p`
  font-size: ${({ labelFontSize }) => labelFontSize};
`;
