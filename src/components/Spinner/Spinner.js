import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size, color}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'small'} color={color || '#fff'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    width: '100%',
  },
};

export default Spinner;
