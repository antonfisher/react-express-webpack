import '@babel/polyfill';
import 'whatwg-fetch';

import 'sanitize.css/sanitize.css';

import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';

import api from 'api/index';
import App from './App';

// global styles
import './style.scss';

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

api.setEndpoint('/api');

ReactDOM.render(<App />, document.getElementById('app'));
