import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './StoreContext';

import Counter from './Counter';
import AddToArray from './AddToArray';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <AddToArray testprop="this is a test prop too" />
      <Counter testprop="this is a test prop" />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    state$: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
