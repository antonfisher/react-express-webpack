import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from 'containers/App';
import LoginForm from 'containers/LoginForm';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" name="login" component={LoginForm} />
        <Route path="/" name="home" component={App} />
      </Switch>
    </BrowserRouter>
  );
}
