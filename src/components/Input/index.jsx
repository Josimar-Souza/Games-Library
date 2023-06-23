import React from 'react';
import PropTypes from 'prop-types';
import { CustomFormItem, CustomInput, Label } from './inputStyles';

function Input({
  placeholder,
  width,
  background,
  border,
  borderWidth,
  margin,
  label,
  labelFontSize,
  colon,
  initialValue,
  name,
}) {
  return (
    <CustomFormItem
      label={<Label labelFontSize={labelFontSize}>{label}</Label>}
      initialValue={initialValue}
      name={name}
      colon={colon}
      width={width}
      margin={margin}
    >
      <CustomInput
        placeholder={placeholder}
        background={background}
        border={border}
        borderWidth={borderWidth}
      />
    </CustomFormItem>
  );
}

Input.defaultProps = {
  placeholder: '',
  width: '100%',
  background: 'white',
  border: '1px solid white',
  borderWidth: '1px',
  margin: '0',
  label: '',
  labelFontSize: '16px',
  colon: false,
  initialValue: '',
  name: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  borderWidth: PropTypes.string,
  margin: PropTypes.string,
  label: PropTypes.string,
  colon: PropTypes.bool,
  labelFontSize: PropTypes.string,
  initialValue: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
