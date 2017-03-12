import {createAction} from 'redux-actions';

export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = createAction(SHOW_MODAL);

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = createAction(HIDE_MODAL);
