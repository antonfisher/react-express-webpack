import React from 'react';
import {Link} from 'react-router';

import Header from '../../components/Header';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  static defaultProps = {
    children: ''
  }

  render() {
    return (
      <div>
        <Header>Main Page</Header>
        <Link to="/login">link to login</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
