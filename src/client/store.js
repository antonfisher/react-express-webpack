import {createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import {reduxActionsLogger} from './logger';

const initialState = {};

const middlewares = [
  routerMiddleware(browserHistory),
  thunk
];

// dev debug
if (module.hot) {
  middlewares.push(reduxActionsLogger);
}

export default createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
