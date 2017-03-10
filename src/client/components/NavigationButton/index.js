import React from 'react';
import {Link} from 'react-router';
import {lightGreen200, lightGreen600} from 'material-ui/styles/colors';

import FlatButton from '../FlatButton';

class NavigationButton extends React.Component {
  static propTypes = {
    to: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  };

  render() {
    const {to, label} = this.props;
    const activeStyle = {backgroundColor: lightGreen600};
    const buttonStyle = {color: 'white', marginLeft: 0, marginRight: 1};

    return (
      <Link to={to} onlyActiveOnIndex={to === '/'} activeStyle={activeStyle}>
        <FlatButton label={label} buttonFilterColor={lightGreen200} style={buttonStyle}>
          {React.Children.toArray(this.props.children)}
        </FlatButton>
      </Link>
    );
  }
}

export default NavigationButton;
