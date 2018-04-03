import { BehaviorSubject as Subject } from 'rxjs';
import { scan, publish } from 'rxjs/operators';

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
