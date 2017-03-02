import React from 'react';
import {Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  static defaultProps = {
    children: ''
  };

  render() {
    const actions = [
      <Link to="/">
        <RaisedButton label="Ok" secondary keyboardFocused />,
      </Link>
    ];

    return (
      <Dialog title="Login" actions={actions} modal open>
        <section>
          Login fields
          {React.Children.toArray(this.props.children)}
        </section>
      </Dialog>
    );
  }
}
