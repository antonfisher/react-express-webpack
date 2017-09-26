import 'babel-polyfill';
import 'whatwg-fetch';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import api from 'api/index';
import store from './store';
import Router from './router';
import muiTheme from './muiTheme';

// global styles
import './style.scss';

// apply polyfill
if (!window.Intl) {
  window.Intl = import('intl');
}

injectTapEventPlugin();

api.setEndpoint('/api');

const render = (AppRouter) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider locale="en">
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppRouter />
          </MuiThemeProvider>
        </IntlProvider>
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
