import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import {SCREENS} from '../constants';

const Stack = createStackNavigator();

const LoggedOutStack = ({headerOptions}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
        options={({navigation}) => ({...headerOptions})}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
