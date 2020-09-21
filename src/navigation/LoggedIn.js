import React from 'react';
import {Keyboard} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import Home from '../screens/Home';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import CurrencyList from '../screens/CurrencyList';
import Favorites from '../screens/Favorites';

import {
  HeaderIconContainer,
  HeaderMenuIcon,
} from '../components/StyledComponents';

import {SCREENS} from '../constants';

const Stack = createStackNavigator();

const LoggedInStack = ({headerOptions, themesHeaderOptions}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={({navigation}) => ({
          ...headerOptions,
          headerRight: () => (
            <HeaderIconContainer
              underlayColor="#fff"
              onPress={() => {
                navigation.navigate(SCREENS.OPTIONS);
                Keyboard.dismiss();
              }}>
              <HeaderMenuIcon icon={faBars} size={20} />
            </HeaderIconContainer>
          ),
        })}
      />
      <Stack.Screen
        name={SCREENS.OPTIONS}
        component={Options}
        options={headerOptions}
      />
      <Stack.Screen
        name={SCREENS.THEMES}
        component={Themes}
        options={themesHeaderOptions}
      />
      <Stack.Screen
        name={SCREENS.CURRENCIES}
        options={({route}) => ({
          ...themesHeaderOptions,
          title: route.params.title,
        })}>
        {(props) => <CurrencyList {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name={SCREENS.FAVORITES}
        component={Favorites}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

export default LoggedInStack;
