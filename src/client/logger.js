import {Iterable} from 'immutable';
import createLogger from 'redux-logger';

export const reduxActionsLogger = createLogger({
  collapsed: true,
  logErrors: false,
  titleFormatter: ((action, time, took) => (`Action: ${action.type} [${time} ${Math.round(took)}ms]`)),
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
