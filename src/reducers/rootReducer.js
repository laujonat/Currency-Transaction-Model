import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
  currencies: currencyReducer
});

export default rootReducer;
