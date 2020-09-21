import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

function InputContainer({ translateY, style = {}, children }) {
  return (
    <Animated.View
      style={[style, { transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}

InputContainer.propTypes = {
  translateY: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};

export default InputContainer;