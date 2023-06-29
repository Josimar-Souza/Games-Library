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
  boxShadow,
  isLoading,
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
      boxshadow={boxShadow}
      loading={isLoading}
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
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  isLoading: false,
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
  boxShadow: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
