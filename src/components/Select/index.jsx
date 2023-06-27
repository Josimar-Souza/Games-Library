import React from 'react';
import PropTypes from 'prop-types';
import { SelectFormItem, CustomSelect, CustomLabel } from './SelectStyles';

function Select({
  label,
  name,
  colon,
  width,
  margin,
  required,
  labelFontSize,
  options,
  placeholder,
  helper,
}) {
  return (
    <SelectFormItem
      label={(
        <CustomLabel
          labelFontSize={labelFontSize}
        >
          {label}
        </CustomLabel>
      )}
      initialValue={options[0]?.value || ''}
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
    >
      <CustomSelect
        options={options}
        defaultValue={options[0]?.value || ''}
        placeholder={placeholder}
      />
    </SelectFormItem>
  );
}

Select.defaultProps = {
  label: '',
  colon: false,
  width: '100%',
  margin: '0',
  required: false,
  labelFontSize: '16px',
  options: [],
  placeholder: '',
  helper: '',
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  colon: PropTypes.bool,
  width: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  labelFontSize: PropTypes.string,
  options: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  placeholder: PropTypes.string,
  helper: PropTypes.string,
};

export default Select;
