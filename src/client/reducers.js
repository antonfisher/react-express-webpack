import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import ApiReducer from 'api/reducer';
import ModalsLayoutReducer from 'containers/ModalsLayout/reducer';

export default combineReducers({
  modals: ModalsLayoutReducer,
  routing: routerReducer,
  api: ApiReducer
});
