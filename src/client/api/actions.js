import {createAction} from 'redux-actions';

import api from './index';
import {showModal} from '../containers/ModalsController/actions';
import ErrorWindow from '../components/ErrorWindow';

function* createGuidGenerator() {
  let i = 1;
  while (i) {
    yield i++;
  }
}

const guidGenerator = createGuidGenerator();

export const API_REQUEST_STARTED = 'API_REQUEST_STARTED';
export const apiRequestStarted = createAction(API_REQUEST_STARTED);
export const API_REQUEST_FINISHED = 'API_REQUEST_FINISHED';
export const apiRequestFinished = createAction(API_REQUEST_FINISHED);

export const API_DATA_SERVERS_LOADED = 'API_DATA_SERVERS_LOADED';
export const apiDataServersLoaded = createAction(API_DATA_SERVERS_LOADED);

export function apiGetServers(callback) {
  return function apiDataGetServers(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({requestId}));
    return api.getStats()
      .then((data) => {
        dispatch(apiDataServersLoaded(data));
        dispatch(apiRequestFinished({requestId}));
        if (callback) {
          callback(); // get rid of callback here?
        }
      })
      .catch((error) => {
        dispatch(apiRequestFinished({requestId, error}));
        dispatch(showModal({key: ErrorWindow.name, props: {message: error.message}}));
      });
  };
}
