import {put, call, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {login, logout, LOGIN, LOGOUT} from '../actions/appActions';
import {sleep} from '../../utils/sleep';

function* watchLogin({username, password}) {
  if (username && password) {
    try {
      yield call(sleep, 500);
      yield put(login.success());
    } catch (e) {
      Alert.alert('Error!', 'Unable to login. Try again.');
      yield put(login.error());
    }
  } else {
    Alert.alert('Error!', 'Enter valid email and password.');
  }
}
function* watchLogout() {
  try {
    yield call(sleep, 300);
    yield put(logout.success());
  } catch (e) {
    Alert.alert('Error!', 'Unable to logout. Try again.');
    yield put(logout.error());
  }
}

export default [
  takeLatest(LOGIN.PENDING, watchLogin),
  takeLatest(LOGOUT.PENDING, watchLogout),
];
