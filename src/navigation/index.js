import 'react-native-gesture-handler';
import React, {useEffect, useCallback} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {AUTH_STATES} from '../constants';
import {getExchangeRates} from '../services/exhangeApi';
import {setExchangeRates} from '../redux/actions/currencyActions';
import selectors from '../redux/selectors';
import LoggedInStack from './LoggedIn';
import LoggedOutStack from './LoggedOut';


export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector(selectors.getTheme);
  const authState = useSelector(selectors.getAuthState);

  const initializeExchangeRates = useCallback(async () => {
    const data = await getExchangeRates('USD');
    dispatch(setExchangeRates(data));
  }, []);

  useEffect(() => {
    initializeExchangeRates();
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.color,
      border: theme.color,
      primary: '#fff',
      text: '#fff',
    },
  };

  const headerOptions = {
    headerStyle: {
      backgroundColor: theme.color,
    },
  };

  const themesHeaderOptions = {
    headerTitleStyle: {
      color: theme.color,
    },
    headerTintColor: theme.color,
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {authState === AUTH_STATES.LOGGED_IN && (
        <LoggedInStack
          headerOptions={headerOptions}
          themesHeaderOptions={themesHeaderOptions}
        />
      )}

      {authState === AUTH_STATES.LOGGED_OUT && (
        <LoggedOutStack headerOptions={headerOptions} />
      )}
    </NavigationContainer>
  );
}
