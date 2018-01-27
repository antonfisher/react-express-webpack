import {OrderedMap} from 'immutable';

import {SHOW_MODAL, ANIMATED_REMOVE_MODAL, REMOVE_MODAL} from 'containers/ModalsLayout/actions';

const initialState = OrderedMap({});

export default function ModalsLayoutReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return state.set(action.payload.key, {
        ...action.payload.props,
        open: true
      });
    case ANIMATED_REMOVE_MODAL:
      return state.set(action.payload.key, {
        ...state.get(action.payload.key),
        ...action.payload.props,
        open: false
      });
    case REMOVE_MODAL:
      return state.delete(action.payload.key);
    default:
      return state;
  }
}
