import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { SpinContainer, SpinTip } from './loadingStyles';

function Loading({ tip, size }) {
  return (
    <SpinContainer>
      <Spin size={size} />
      <SpinTip>{tip}</SpinTip>
    </SpinContainer>
  );
}

Loading.defaultProps = {
  tip: '',
  size: 'default',
};

Loading.propTypes = {
  tip: PropTypes.string,
  size: PropTypes.string,
};

export default Loading;
