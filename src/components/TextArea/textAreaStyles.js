import styled from 'styled-components';
import { Form, Input } from 'antd';

const { TextArea } = Input;

export const TextAreaFormItem = styled(Form.Item)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export const CustomTextArea = styled(TextArea)``;
