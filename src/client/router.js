import React from 'react';
import {Router, Route} from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';

export default ({history}) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/login" component={LoginForm}/>
    </Router>
  );
};
