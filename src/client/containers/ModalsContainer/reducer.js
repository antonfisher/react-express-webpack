import {OrderedMap} from 'immutable';
import {SHOW_MODAL, HIDE_MODAL} from './actions';

const initialState = OrderedMap({AboutWindow: {a: 1}});

export default function ModalsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return state.set(action.componentName, action.props);
    case HIDE_MODAL:
      return state.delete(action.componentName);
    default:
      return state;
  }
}
