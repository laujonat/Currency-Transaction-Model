import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
  currencies: currencyReducer
});

export default rootReducer;
