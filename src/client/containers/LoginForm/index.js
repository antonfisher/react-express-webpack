import React from 'react';
import {Link} from 'react-router';

import Header from '../../components/Header';

export default class LoginForm extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  static defaultProps = {
    children: ''
  }

  render() {
    return (
      <div>
        <Header>Login Page</Header>
        <Link to="/">link to home</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
