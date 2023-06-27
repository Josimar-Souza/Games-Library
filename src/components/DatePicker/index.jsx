import React from 'react';
import PropTypes from 'prop-types';

import { DatePickerFormItem, CustomDatePicker, CustomLabel } from './datePickerStyles';

function DatePicker({
  label,
  initialValue,
  name,
  colon,
  width,
  margin,
  required,
  dateFormat,
  placeholder,
  labelFontSize,
}) {
  return (
    <DatePickerFormItem
      label={(
        <CustomLabel
          labelFontSize={labelFontSize}
        >
          {label}
          {colon ? ':' : ''}
        </CustomLabel>
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
    >
      <CustomDatePicker
        format={dateFormat}
        placeholder={placeholder}
      />
    </DatePickerFormItem>
  );
}

DatePicker.defaultProps = {
  label: '',
  initialValue: '',
  colon: false,
  width: '100%',
  margin: '0',
  required: false,
  dateFormat: 'DD/MM/YYYY',
  placeholder: 'Selecione a data',
  labelFontSize: '16px',
};

DatePicker.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  colon: PropTypes.bool,
  width: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  dateFormat: PropTypes.string,
  placeholder: PropTypes.string,
  labelFontSize: PropTypes.string,
};

export default DatePicker;
