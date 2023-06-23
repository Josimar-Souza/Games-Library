import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './buttonStyles';

function Button({
  children,
  background,
  border,
  borderWidth,
  fontSize,
  onClick,
}) {
  return (
    <CustomButton
      background={background}
      border={border}
      borderWidth={borderWidth}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
}

Button.defaultProps = {
  background: 'white',
  border: '1px solid white',
  borderWidth: '1px',
  fontSize: '16px',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  background: PropTypes.string,
  border: PropTypes.string,
  borderWidth: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
