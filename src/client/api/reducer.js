import {Map, OrderedMap, List} from 'immutable';
import {API_GET_STATS_REQUESTED, API_GET_STATS_LOADED, API_GET_STATS_ERROR} from './actions';

const initialState = Map({
  loading: false,
  requests: OrderedMap({}),
  data: Map({
    servers: List()
  })
});

export default function ApiReducer(state = initialState, action) {
  switch (action.type) {
    case API_GET_STATS_REQUESTED:
      return state
        .setIn(['requests', action.payload.requestId], action.payload)
        .set('loading', true);
    case API_GET_STATS_LOADED:
      return state
        .removeIn(['requests', action.payload.requestId])
        .setIn(['data', 'servers'], List(action.payload.data.servers))
        .set('loading', (state.get('requests').size > 1));
    case API_GET_STATS_ERROR:
      return state
        .removeIn(['requests', action.payload.requestId])
        .set('loading', (state.get('requests').size > 1));
    default:
      return state;
  }
}
