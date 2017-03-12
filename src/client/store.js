import {createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import createLogger from 'redux-logger';
import {Iterable} from 'immutable';

import reducers from './reducers';

const initialState = {};

const middlewares = [
  routerMiddleware(browserHistory)
];

// dev debug
// TODO separate file
if (module.hot) {
  middlewares.push(createLogger({
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
  }));
}

export default createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
