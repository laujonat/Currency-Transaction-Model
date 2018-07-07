import { combineReducers } from 'redux';
import userReducer from './userReducer';
import currencyReducer from './currencyReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
  users: userReducer,
  currencies: currencyReducer,
  history: historyReducer
});

export default rootReducer;
