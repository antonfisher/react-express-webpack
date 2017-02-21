import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

// global styles
import './style.scss';

import store from './store';
import routes from './routes';

const history = syncHistoryWithStore(browserHistory, store);

const render = (appRoutes) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router routes={appRoutes} history={history} />
    </Provider>,
    document.getElementById('app')
  );
};

render(routes);

// need to remount root component on hot reload
if (module.hot) {
  module.hot.accept('./routes.js', () => {
    render(require('./routes.js').default);
  });
}
