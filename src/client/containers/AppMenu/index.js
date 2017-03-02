import React from 'react';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ActionExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import ActionHelpOutlineIcon from 'material-ui/svg-icons/action/help-outline';
import ActionInfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import AboutWindow from '../../components/AboutWindow';

class AppMenu extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);
    this.state = {
      showAboutWindow: false
    };
    this.showAboutWindow = this.showAboutWindow.bind(this);
    this.hideAboutWindow = this.hideAboutWindow.bind(this);
  }

  showAboutWindow() {
    this.setState({showAboutWindow: true});
  }

  hideAboutWindow() {
    this.setState({showAboutWindow: false});
  }

  render() {
    return (
      <section>
        <IconMenu
          desktop
          iconButtonElement={
            <FlatButton
              label="Username"
              labelPosition="before"
              style={{color: 'white'}}
              icon={<NavigationExpandMoreIcon color="white" />}
            />
          }
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onItemTouchTap={this.showAboutWindow}
        >
          <MenuItem primaryText="Log out" leftIcon={<ActionExitToAppIcon />} />
          <MenuItem primaryText="Help" leftIcon={<ActionHelpOutlineIcon />} />
          <MenuItem primaryText="About" leftIcon={<ActionInfoOutlineIcon />} />
        </IconMenu>
        <AboutWindow show={this.state.showAboutWindow} onOk={this.hideAboutWindow} />
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapDispatchToProps)(AppMenu);
