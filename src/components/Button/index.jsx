import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './buttonStyles';

function Button({
  children,
  background,
  border,
  borderWidth,
  borderRadius,
  fontSize,
  onClick,
  color,
  htmlType,
  margin,
  display,
}) {
  return (
    <CustomButton
      background={background}
      border={border}
      borderwidth={borderWidth}
      fontSize={fontSize}
      onClick={onClick}
      color={color}
      htmlType={htmlType}
      margin={margin}
      display={display}
      borderradius={borderRadius}
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
  color: 'black',
  htmlType: 'button',
  margin: '0',
  display: 'inline',
  borderRadius: '5px',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  background: PropTypes.string,
  border: PropTypes.string,
  borderWidth: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  htmlType: PropTypes.string,
  margin: PropTypes.string,
  display: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Button;
