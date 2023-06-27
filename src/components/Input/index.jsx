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
  borderRadius,
  required,
  type,
  helper,
  onChange,
  ...restvalues
}) {
  return (
    <CustomFormItem
      label={(
        <Label
          labelfontsize={labelFontSize}
        >
          {label}
          {colon ? ':' : ''}
        </Label>
      )}
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
      tooltip={helper}
      {...restvalues}
    >
      <CustomInput
        type={type}
        placeholder={placeholder}
        background={background}
        border={border}
        borderwidth={borderWidth}
        borderRadius={borderRadius}
        onChange={onChange}
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
  borderRadius: '5px',
  required: false,
  type: 'text',
  helper: '',
  onChange: () => {},
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
  borderRadius: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  helper: PropTypes.string,
  onChange: PropTypes.string,
};

export default Input;
