import React from 'react';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// global styles
import 'sanitize.css/sanitize.css';
import './style.scss';

import store from '../store';
import Router from '../router';
import muiTheme from '../muiTheme';

const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={history} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
