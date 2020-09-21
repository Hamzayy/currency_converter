import React from 'react';
import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Spinner from '../Spinner';
import {View, Text} from 'react-native';

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: ${(props) => props.justify || 'flex-start'};
  padding: ${(props) => `${props.padding || 10}px`};
  padding-top: ${(props) => `${props.paddingTop || 30}px`};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  margin-top: ${(props) => `${props.marginTop || 0}px`}
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
`;

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const HeaderMenuIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #fff;
`;

export const HeaderIconContainer = styled.TouchableHighlight`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const AppLogoContainer = styled(Animated.View)`
  width: ${(props) => props.width || 250}px;
  height: ${(props) => props.width || 250}px;
`;

const inputContainerStyles = `
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  ${inputContainerStyles}
  margin-bottom: ${(props) => props.marginBottom || 20}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 45px;
  margin-left: 16px;
  border-bottom-color: #fff;
  font-size: ${(props) => props.fontSize || 16}px;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-left: 15px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold
`;

export const RowFlex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify || 'center'};
  margin-top: ${(props) => `${props.marginTop || 0}px`};
`;

export const InfoText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
export const SwitchIconContainer = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
`;


export const InputAddOn = styled.TouchableHighlight`
  padding-left: 15px;
  justify-content: center;
  height: 40px;
  width: 60px;
  shadow-offset: 0;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  border-right-width: 1px;
  border-right-color: #eee;
`;

export const FormInputWrapper = styled.View`
  padding; 10px;
  margin-bottom: 15px;
`;

export const ErrorText = styled.Text`
  color: white;
`;

export const IconCircle = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const FormInput = ({
  inputProps,
  input,
  theme,
  icon,
  meta,
  onChangeText,
}) => {
  return (
    <FormInputWrapper>
      <InputContainer marginBottom={3}>
        <Icon icon={icon} color={theme.color} size={20} />
        <TextInput
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          {...input}
          {...inputProps}
        />
      </InputContainer>
      <View>
        {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
      </View>
    </FormInputWrapper>
  );
};

export const ButtonContainer = styled.TouchableOpacity`
  ${inputContainerStyles}
  align-self: center;
  background-color: ${(props) => props.backgroundColor || '#fff'};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  align-self: center;
  text-align: center;
  color: ${(props) => props.color || '#000'};
`;

export const LoginButton = ({text, loading, onPress, color}) => {
  return (
    <ButtonContainer onPress={onPress}>
      {!loading ? (
        <ButtonText color={color}>{text}</ButtonText>
      ) : (
        <Spinner color={color} />
      )}
    </ButtonContainer>
  );
};

export const ListItemTitle = styled.Text`
  font-size: ${(props) => `${props.fontSize || 16}px`};
  color: ${(props) => `${props.color || '#fff'}`};
  font-weight: 500;
`;

export const ListItem = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${(props) => `${props.isLast ? 0 : 1}px`};
  height: 50px;
  border-bottom-color: #eee;
  padding: ${(props) => `${props.padding || 10}px`};
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const FavoriteContainer = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  flex-direction: row;
  align-items: flex-start;
`;

