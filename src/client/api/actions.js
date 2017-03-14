import {createAction} from 'redux-actions';

import api from './index';

export const API_GET_STATS_REQUESTED = 'API_GET_STATS_REQUESTED';
export const apiGetStatsRequested = createAction(API_GET_STATS_REQUESTED);
export const API_GET_STATS_LOADED = 'API_GET_STATS_LOADED';
export const apiGetStatsLoaded = createAction(API_GET_STATS_LOADED);
export const API_GET_STATS_ERROR = 'API_GET_STATS_ERROR';
export const apiGetStatsError = createAction(API_GET_STATS_ERROR);
export function apiGetStats() {
  return function (dispatch) {
    dispatch(apiGetStatsRequested());
    return api.getStats()
      .then((data) => dispatch(apiGetStatsLoaded(data.servers)))
      .catch((err) => dispatch(apiGetStatsError(err)));
  };
};
