/* global document */
// Tried to copy simple Redux functionality with the use of RxJS, Recompose and React Context.
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

// Tell the observers and observable state to connect,
// don't know where else to put this.
store.state$.connect();

module.hot.accept();
