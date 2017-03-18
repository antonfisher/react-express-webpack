import {Map, OrderedMap, List} from 'immutable';

import {
  API_REQUEST_STARTED,
  API_REQUEST_FINISHED,
  API_DATA_SERVERS_LOADED
} from './actions';

const initialState = Map({
  loading: false,
  requests: OrderedMap({}),
  errors: Map({
    last: null
  }),
  data: Map({
    servers: List()
  })
});

export default function ApiReducer(state = initialState, action) {
  switch (action.type) {

    case API_REQUEST_STARTED:
      return state
        .setIn(['requests', action.payload.requestId], action.payload)
        .set('loading', true);

    case API_REQUEST_FINISHED:
      return state
        .removeIn(['requests', action.payload.requestId])
        .set('loading', (state.get('requests').size > 1))
        .setIn(
          ['errors', 'last'],
          (action.payload.error ? action.payload.error.message : state.getIn(['errors', 'last']))
        );

    case API_DATA_SERVERS_LOADED:
      return state.setIn(['data', 'servers'], List(action.payload.servers));

    default:
      return state;
  }
}
