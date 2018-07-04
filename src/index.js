import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Root from './components/root';
import rootReducer from './reducers/rootReducer';
import { fetchCurrencies } from "./actions/curr_actions";
import { fillUserWallet } from "./actions/user_actions";

// const createStoreWithMiddleware = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
  store.dispatch(fetchCurrencies());
  store.dispatch(fillUserWallet());

  // TESTING
  window.fetchCurrencies = fetchCurrencies;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING

  const root = document.getElementById('converter');
  ReactDOM.render(<Root store={ store }/>, root);
});
