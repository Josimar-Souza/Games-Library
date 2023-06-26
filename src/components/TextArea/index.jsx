import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaFormItem, CustomTextArea } from './textAreaStyles';

function TextArea({
  label,
  initialValue,
  name,
  colon,
  width,
  margin,
  required,
  showCount,
  maxLength,
  placeHolder,
  resize,
  height,
}) {
  return (
    <TextAreaFormItem
      label={label}
      initialValue={initialValue}
      name={name}
      colon={colon}
      width={width}
      margin={margin}
      rules={[
        {
          required,
          message: `${label} é necessário`,
        },
      ]}
    >
      <CustomTextArea
        showCount={showCount}
        maxLength={maxLength}
        placeholder={placeHolder}
        style={{
          height,
          resize,
        }}
      />
    </TextAreaFormItem>
  );
}

TextArea.defaultProps = {
  label: '',
  initialValue: '',
  colon: false,
  width: '100%',
  margin: '0',
  required: false,
  showCount: false,
  maxLength: 100,
  placeHolder: '',
  resize: 'both',
  height: '120px',
};

TextArea.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  colon: PropTypes.bool,
  width: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  showCount: PropTypes.bool,
  maxLength: PropTypes.number,
  placeHolder: PropTypes.string,
  resize: PropTypes.string,
  height: PropTypes.string,
};

export default TextArea;
