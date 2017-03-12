import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import ModalsControllerReducer from 'containers/ModalsController/reducer';

export default combineReducers({
  modals: ModalsControllerReducer,
  routing: routerReducer
});
