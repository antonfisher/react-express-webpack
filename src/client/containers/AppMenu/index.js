import React from 'react';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ActionExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import ActionHelpOutlineIcon from 'material-ui/svg-icons/action/help-outline';
import ActionInfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import {showModal} from '../ModalsController/actions';
import AboutWindow from '../../components/AboutWindow';
import ConfirmationDialog from '../../components/ConfirmationDialog';

export class AppMenuComponent extends React.Component {
  static propTypes = {
    doLogout: React.PropTypes.func.isRequired,
    showAboutWindow: React.PropTypes.func.isRequired,
    showLogoutConfirmation: React.PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);
    this.onShowAboutWindow = this.onShowAboutWindow.bind(this);
    this.onShowLogoutConfirmation = this.onShowLogoutConfirmation.bind(this);
  }

  onShowLogoutConfirmation() {
    this.props.showLogoutConfirmation({
      text: 'Log out?',
      onOk: (hideModal) => {
        this.props.doLogout(() => {
          hideModal();
        });
      }
    });
  }

  onShowAboutWindow() {
    this.props.showAboutWindow();
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
        >
          <MenuItem
            primaryText="Log out"
            leftIcon={<ActionExitToAppIcon />}
            onTouchTap={this.onShowLogoutConfirmation}
          />
          <MenuItem primaryText="Help" leftIcon={<ActionHelpOutlineIcon />} />
          <MenuItem
            primaryText="About"
            leftIcon={<ActionInfoOutlineIcon />}
            onTouchTap={this.onShowAboutWindow}
          />
        </IconMenu>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAboutWindow() {
      dispatch(showModal({key: AboutWindow.name}));
    },
    showLogoutConfirmation(props) {
      dispatch(showModal({key: ConfirmationDialog.name, props}));
    },
    doLogout(callback) {
      console.log('-- logout!');
      setTimeout(() => {
        console.log('-- logout DONE!');
        callback();
      }, 2000);
    }
  };
}

const AppMenu = connect(null, mapDispatchToProps)(AppMenuComponent);

export default AppMenu;
