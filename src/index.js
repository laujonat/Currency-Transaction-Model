import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Root from './components/root';
import rootReducer from './reducers/rootReducer';
import { fetchCurrencies } from "./actions/curr_actions";
// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = {
  //   person1: Math.random(100),
  //   person2: Math.random(100)
  // };

  const store = createStore(
    rootReducer,
    // preloadedState,
    applyMiddleware(thunk, logger)
  );

  window.fetchCurrencies = fetchCurrencies;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('converter');
  ReactDOM.render(<Root store={ store }/>, root);
});
