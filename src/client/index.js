import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './store';
import Router from './router';

const history = syncHistoryWithStore(browserHistory, store);

const render = (Router) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}/>
    </Provider>,
    document.getElementById('app')
  );
}

render(Router);

// need to remount root component on hot reload
if (module.hot) {
  module.hot.accept('./router.js', () => {
    render(require('./router.js').default);
  });
}
