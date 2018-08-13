import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ActionExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import ActionHelpOutlineIcon from 'material-ui/svg-icons/action/help-outline';
import ActionInfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import {showModal} from 'containers/ModalsLayout/actions';
import {apiGetServers} from 'api/actions';
import AboutWindow from 'components/AboutWindow';
import ConfirmationDialog from 'components/ConfirmationDialog';

export class AppMenu extends React.Component {
  static propTypes = {
    doLogout: PropTypes.func.isRequired,
    showAboutWindow: PropTypes.func.isRequired,
    showLogoutConfirmation: PropTypes.func.isRequired
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
          <MenuItem primaryText="Help" leftIcon={<ActionHelpOutlineIcon />} />
          <MenuItem primaryText="About" leftIcon={<ActionInfoOutlineIcon />} onClick={this.onShowAboutWindow} />
          <MenuItem primaryText="Log out" leftIcon={<ActionExitToAppIcon />} onClick={this.onShowLogoutConfirmation} />
        </IconMenu>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAboutWindow() {
      dispatch(showModal({key: AboutWindow.NAME}));
    },
    showLogoutConfirmation(props) {
      dispatch(showModal({key: ConfirmationDialog.NAME, props}));
    },
    doLogout(callback) {
      // get rid of callback here
      dispatch(apiGetServers(callback));
      setTimeout(() => {
        dispatch(showModal({key: AboutWindow.NAME}));
      }, 1500);
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AppMenu);
