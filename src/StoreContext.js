import React from 'react';
import { componentFromStream, setObservableConfig } from 'recompose';
import { from } from 'rxjs';
import { map, combineLatest } from 'rxjs/operators';

const config = {
  fromESObservable: from,
  toESObservable: function toESObservable(stream) {
    return stream;
  },
};
setObservableConfig(config);

const StoreContext = React.createContext();

export const Provider = ({ children, store }) => (
  <StoreContext.Provider value={store}>
    { children }
  </StoreContext.Provider>
);

export const connect = (mapStateToProps, mapDispatchToProps) => BaseComponent => props => (
  <StoreContext.Consumer>
    { (store) => {
      let dispatchActions;
      if (mapDispatchToProps) {
        dispatchActions = mapDispatchToProps(store.dispatch);
      }
      const selectedPropsState$ = store.state$.pipe(map(state =>
        mapStateToProps(state)));
      const ComponentWithStore = componentFromStream(props$ =>
        props$.pipe(combineLatest(
          selectedPropsState$,
          (componentProps, selectedPropsState) => <BaseComponent {...componentProps} {...selectedPropsState} />,
        )));
      return <ComponentWithStore {...props} {...dispatchActions} dispatch={store.dispatch} />;
    } }
  </StoreContext.Consumer>
);
