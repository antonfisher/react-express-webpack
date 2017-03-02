import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/root';

injectTapEventPlugin();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

// need to re-mount app component on hot reload
if (module.hot) {
  module.hot.accept('./containers/root.js', () => {
    render(require('./containers/root').default);
  });
}
