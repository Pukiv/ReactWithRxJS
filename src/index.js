/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import createStore from './createStore';
import reducers from './reducers';

const store = createStore(reducers);
ReactDOM.render(
  <App store={store} />,
  document.getElementById('app'),
);

store.state$.connect();
module.hot.accept();
