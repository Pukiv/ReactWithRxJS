import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from './StoreContext';

const mapStateToProps = state => ({
  count: state.count,
  array: state.array,
});

const mapDispatchToProps = dispatch => ({
  increment: dispatch(payload => ({ type: 'INCREMENT', payload })),
  decrement: dispatch(payload => ({ type: 'DECREMENT', payload })),
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onIncrementClick: ({ increment }) => e => increment(e),
    onDecrementClick: ({ decrement }) => e => decrement(e),
  }),
);

const Counter = enhance(props => (
  <div>
    <button onClick={() => props.onIncrementClick(1)}>+</button>
    <button onClick={() => props.onDecrementClick(1)}>-</button>
    <h1>{ props.count }</h1>
    { props.array.map(entry => <li>{entry}</li>)}
  </div>
));

export default Counter;
