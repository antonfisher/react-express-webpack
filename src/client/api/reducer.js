import {Map, OrderedMap, List} from 'immutable';
import {API_GET_STATS_REQUESTED, API_GET_STATS_LOADED, API_GET_STATS_ERROR} from './actions';

const initialState = {
  loading: false,
  requests: OrderedMap({}),
  data: {
    servers: List()
  }
};

let id = 0;

export default function ApiReducer(state = initialState, action) {
  id++;
  switch (action.type) {
    case API_GET_STATS_REQUESTED:
      state.requests.set(id, false);
      state.loading = true;
      return state;
    case API_GET_STATS_LOADED:
      console.log('-- payload', action.payload);
      state.loading = (state.requests.size > 0);
      state.data.servers = List(action.payload);
      state.requests.set(id, true);
      return state;
    case API_GET_STATS_ERROR:
      state.loading = (state.requests.size > 0);
      state.requests.set(id, true);
      return state;
    default:
      return state;
  }
}
