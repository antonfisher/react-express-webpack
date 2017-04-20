import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: ''
  };

  render() {
    const actions = [
      <Link to="/servers">
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
