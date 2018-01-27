import {List, Map, OrderedMap} from 'immutable';

import {API_DATA_SERVERS_LOADED, API_REQUEST_FINISHED, API_REQUEST_STARTED} from 'api/actions';

const initialState = Map({
  loading: false,
  requests: OrderedMap({}),
  errors: Map({
    last: null
  }),
  lastUpdate: Map({
    servers: null
  }),
  data: Map({
    servers: List()
  })
});

export default function ApiReducer(state = initialState, action) {
  switch (action.type) {
    case API_REQUEST_STARTED:
      return state.setIn(['requests', action.payload.requestId], action.payload).set('loading', true);

    case API_REQUEST_FINISHED:
      return state
        .removeIn(['requests', action.payload.requestId])
        .set('loading', state.get('requests').size > 1)
        .setIn(
          ['errors', 'last'],
          action.payload.error ? action.payload.error.message : state.getIn(['errors', 'last'])
        );

    case API_DATA_SERVERS_LOADED:
      return state
        .setIn(['lastUpdate', 'servers'], Date.now())
        .setIn(['data', 'servers'], List(action.payload.servers));

    default:
      return state;
  }
}
