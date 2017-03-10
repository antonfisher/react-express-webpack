import React from 'react';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ActionExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import ActionHelpOutlineIcon from 'material-ui/svg-icons/action/help-outline';
import ActionInfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import {showModal, hideModal} from '../ModalsContainer/actions';
import AboutWindow from '../../components/AboutWindow';
import ConfirmationDialog from '../../containers/ConfirmationDialog';

export class AppMenu extends React.Component {
  static propTypes = {
    onShowAboutWindow: React.PropTypes.func.isRequired
  };

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
            onTouchTap={this.props.onBeforeLogout.bind(this, this.props.onLogout)}
          />
          <MenuItem primaryText="Help" leftIcon={<ActionHelpOutlineIcon />} />
          <MenuItem
            primaryText="About"
            leftIcon={<ActionInfoOutlineIcon />}
            onTouchTap={this.props.onShowAboutWindow}
          />
        </IconMenu>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onShowAboutWindow() {
      dispatch(showModal(AboutWindow.name));
    },
    onBeforeLogout(callback) {
      dispatch(showModal(ConfirmationDialog.name, {text: 'Log out?', onOk: callback}));
    },
    onLogout() {
      dispatch(hideModal(ConfirmationDialog.name));
    }
  };
}

export default AppMenu = connect(null, mapDispatchToProps)(AppMenu);
