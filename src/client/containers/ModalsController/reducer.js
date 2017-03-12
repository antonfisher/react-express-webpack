import {OrderedMap} from 'immutable';
import {SHOW_MODAL, HIDE_MODAL} from './actions';

const initialState = OrderedMap({});

export default function ModalsControllerReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return state.set(action.payload.key, action.payload.props);
    case HIDE_MODAL:
      return state.delete(action.payload);
    default:
      return state;
  }
}
