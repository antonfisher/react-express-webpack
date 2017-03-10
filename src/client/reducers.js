import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import ModalsContainerReducer from 'containers/ModalsContainer/reducer'

export default combineReducers({
  modals: ModalsContainerReducer,
  routing: routerReducer
});
