import { BehaviorSubject as Subject } from 'rxjs';
import { scan, publish } from 'rxjs/operators';

// Create a Subject Observable so we can push actions onto the stream
// and then send them to a reducer to change the state accordingly.
const createStore = (reducer) => {
  const action$ = new Subject();
  const dispatch = func => (...args) => action$.next(func(...args));
  const state$ = action$.pipe(
    scan(reducer, {}),
    publish(),
  );
  action$.next({ type: 'INIT' });
  return { state$, dispatch };
};

export default createStore;
