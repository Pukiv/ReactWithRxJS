// Combine reducers into a single reducer.
export const combineReducers = reducers => (state, action) => {
  const reducerKeys = Object.keys(reducers);
  const newState = Object.assign({}, ...reducerKeys.map(key => ({[key]: reducers[key](state[key], action)})));
  return newState;
};

