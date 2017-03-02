import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './containers/App';
import LoginForm from './containers/LoginForm';
import NotFound from './containers/NotFound';
import UsersPage from './containers/UsersPage';

export default function ({history}) {
  return (
    <Router history={history}>
      <Route path="/" name="home" component={App}>
        <IndexRoute component={UsersPage} />
        <Route path="/users" name="home-users" component={NotFound} />
      </Route>
      <Route path="/login" name="login" component={LoginForm} />
      <Route path="*" name="notFound" component={NotFound} />
    </Router>
  );
}
