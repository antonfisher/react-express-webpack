import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {AppContainer} from 'react-hot-loader';
import {syncHistoryWithStore} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// global styles
import 'sanitize.css/sanitize.css';
import './style.scss';

import store from './store';
import Router from './router';
import muiTheme from './muiTheme';
import api from './api/index';

injectTapEventPlugin();

api.setEndpoint('/api');

const history = syncHistoryWithStore(browserHistory, store);

const render = (AppRouter) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppRouter history={history} />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Router);

// need to re-mount app component on hot reload
if (module.hot) {
  module.hot.accept('./router.js', () => {
    render(require('./router').default);
  });
}
