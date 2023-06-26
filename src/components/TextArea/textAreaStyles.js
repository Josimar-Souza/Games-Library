import styled from 'styled-components';
import { Form, Input } from 'antd';

const { TextArea } = Input;

export const TextAreaFormItem = styled(Form.Item)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export const CustomLabel = styled.p`
  font-size: ${({ labelFontSize }) => labelFontSize};
`;

export const CustomTextArea = styled(TextArea)``;
