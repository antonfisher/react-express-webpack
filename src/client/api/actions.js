import {createAction} from 'redux-actions';

import api from './index';

function* createGuidGenerator() {
  let i = 1;
  while (i) {
    yield i++;
  }
}

const guidGenerator = createGuidGenerator();

export const API_GET_STATS_REQUESTED = 'API_GET_STATS_REQUESTED';
export const apiGetStatsRequested = createAction(API_GET_STATS_REQUESTED);
export const API_GET_STATS_LOADED = 'API_GET_STATS_LOADED';
export const apiGetStatsLoaded = createAction(API_GET_STATS_LOADED);
export const API_GET_STATS_ERROR = 'API_GET_STATS_ERROR';
export const apiGetStatsError = createAction(API_GET_STATS_ERROR);
export function apiGetStats(callback) {
  return function apiGetStatsAction(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiGetStatsRequested({requestId}));
    return api.getStats()
      .then((data) => dispatch(apiGetStatsLoaded({requestId, data})))
      .then(() => (callback ? callback() : null)) // get rid of callback here
      .catch((err) => dispatch(apiGetStatsError({requestId, err})));
  };
}
