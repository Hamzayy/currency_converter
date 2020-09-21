import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  SWITCH_CURRENCIES,
  setExchangeRates,
  switchCurrencies,
} from '../actions/currencyActions';
import selectors from '../selectors';
import { getExchangeRates } from '../../services/exhangeApi';

function* watchSwitchCurrencies() {
  try {
    const targetCurrency = yield select(selectors.getTargetCurrency);
    const response = yield call(getExchangeRates, targetCurrency);
    yield put(setExchangeRates(response));
    yield put(switchCurrencies.success());
  } catch (error) {
    yield put(switchCurrencies.error(error));
  }
}

export default [takeLatest(SWITCH_CURRENCIES.PENDING, watchSwitchCurrencies)];
