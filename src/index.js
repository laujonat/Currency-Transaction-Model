import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import rootReducer from './reducers/rootReducer';

// import App from './components/app';
// import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    rootReducer,
    applyMiddleware()
  );

  const root = document.getElementById('converter');
  ReactDOM.render(<Root store={ store }/>, root);
});
