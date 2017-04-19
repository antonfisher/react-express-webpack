import {Iterable} from 'immutable';
import {createLogger} from 'redux-logger';

const reduxActionsLogger = createLogger({
  collapsed: true,
  logErrors: true,
  // titleFormatter: ((action, time, took) => (`Action: ${String(action.type)} [${time} ${Math.round(took)}ms]`)),
  stateTransformer: (state) => {
    const newState = {};
    Object.keys(state).forEach((i) => {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    });
    return newState;
  }
});

export default reduxActionsLogger;
