import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from './StoreContext';

// Function that is sent to connect to select specific state props.
const mapStateToProps = state => ({ array: state.array });

// Function that is sent to connect to map actions with dispatch.
const mapDispatchToProps = dispatch => ({
  add: dispatch(payload => ({ type: 'ADD', payload })),
  remove: dispatch(payload => ({ type: 'REMOVE', payload })),
});

// The connect function and normal recompose stuff.
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
  </div>
));

export default AddToArray;
