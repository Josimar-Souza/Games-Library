import styled from 'styled-components';
import { DatePicker, Form } from 'antd';

export const DatePickerFormItem = styled(Form.Item)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 100%;
`;

export const CustomLabel = styled.p`
  font-size: ${({ labelFontSize }) => labelFontSize};
`;
