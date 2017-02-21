import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        Main Page 1<br/>
        <Link to="/login">link to login</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
