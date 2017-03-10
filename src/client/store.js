import {createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import createLogger from 'redux-logger';
import reducers from './reducers';

const initialState = {};

const middlewares = [
  routerMiddleware(browserHistory)
];

// dev debug
if (module.hot) {
  middlewares.push(createLogger({
    collapsed: true,
    logErrors: false,
    titleFormatter: ((action, time, took) => (`Action: ${action.type} [${time} ${Math.round(took)}ms]`))
  }));
}

export default createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
