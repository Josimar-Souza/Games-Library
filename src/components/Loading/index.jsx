import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { SpinContainer, SpinTip } from './loadingStyles';

function Loading({
  tip,
  size,
  margin,
  height,
}) {
  return (
    <SpinContainer margin={margin} height={height}>
      <Spin size={size} />
      <SpinTip>{tip}</SpinTip>
    </SpinContainer>
  );
}

Loading.defaultProps = {
  tip: '',
  size: 'default',
  margin: '0',
  height: '250px',
};

Loading.propTypes = {
  tip: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.string,
  height: PropTypes.string,
};

export default Loading;
