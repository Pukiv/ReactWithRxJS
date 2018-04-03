import { combineReducers } from './reducerUtils';

const array = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
};

const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
};

export default combineReducers({ array, count });

