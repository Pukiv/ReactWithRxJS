import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from './StoreContext';

const mapStateToProps = state => ({ array: state.array });

const mapDispatchToProps = dispatch => ({
  add: dispatch(payload => ({ type: 'ADD', payload })),
  remove: dispatch(payload => ({ type: 'REMOVE', payload })),
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onAddClick: ({ add }) => e => add(e),
    onRemoveClick: ({ remove }) => () => remove(),
  }),
);

const AddToArray = enhance(props => (
  <div>
    <button onClick={() => props.onAddClick('entry')}>Add entry</button>
    <button onClick={() => props.onRemoveClick()}>Remove entry</button>
    <h1>{ props.count }</h1>
  </div>
));

export default AddToArray;
