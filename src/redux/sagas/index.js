import {all} from 'redux-saga/effects';
import currencySagas from './currencySagas';
import appSagas from './appSagas';

export default function* rootSaga() {
  yield all([...currencySagas, ...appSagas]);
}
