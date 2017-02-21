import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import reducer from './reducers';

const initialState = {};

const middlewares = [
  routerMiddleware(browserHistory)
];

export default createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);
