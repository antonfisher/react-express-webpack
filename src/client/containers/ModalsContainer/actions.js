export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal(componentName, props = {}) {
  return {
    type: SHOW_MODAL,
    componentName,
    props
  };
}

export function hideModal(componentName) {
  return {
    type: HIDE_MODAL,
    componentName
  };
}
