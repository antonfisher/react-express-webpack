import {createAction} from 'redux-actions';

export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = createAction(SHOW_MODAL);

export const REMOVE_MODAL = 'REMOVE_MODAL';
export const removeModal = createAction(REMOVE_MODAL);

export const ANIMATED_REMOVE_MODAL = 'ANIMATED_REMOVE_MODAL';
const animatedRemoveModal = createAction(ANIMATED_REMOVE_MODAL);

export function hideModal(payload) {
  return function animatedRemoveModalRunner(dispatch) {
    dispatch(animatedRemoveModal(payload));
    setTimeout(() => dispatch(removeModal(payload)), 500);
  };
}
