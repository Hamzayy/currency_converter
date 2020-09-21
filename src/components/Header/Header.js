import React from 'react';
import {View} from 'react-native';
import {Avatar, HeaderContainer} from '../StyledComponents';
const Header = () => {
  return (
    <View>
      <HeaderContainer>
        <Avatar source={require('../../../assets/logo.png')} />
      </HeaderContainer>
    </View>
  );
};

export default Header;
