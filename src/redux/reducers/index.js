import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import currencyReducer from './currencyReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  form: formReducer,
  currencyReducer: currencyReducer,
  appReducer: appReducer,
});

export default rootReducer;
