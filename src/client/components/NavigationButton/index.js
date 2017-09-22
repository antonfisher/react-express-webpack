import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {lightGreen600} from 'material-ui/styles/colors';

import FlatButton from 'components/FlatButton';

class NavigationButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    exact: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    exact: false
  };

  render() {
    const {to, label, ...props} = this.props;
    const activeStyle = {backgroundColor: lightGreen600};
    const buttonStyle = {color: 'white', marginLeft: 0, marginRight: 1};

    return (
      <NavLink to={to} activeStyle={activeStyle} {...props}>
        <FlatButton label={label} style={buttonStyle}>
          {React.Children.toArray(this.props.children)}
        </FlatButton>
      </NavLink>
    );
  }
}

export default NavigationButton;
