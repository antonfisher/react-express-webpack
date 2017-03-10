import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import {hideModal} from '../ModalsContainer/actions';
import FlatButton from '../../components/FlatButton';

class ConfirmationDialog extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    onOk: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
    onHideModal: React.PropTypes.func,
    text: React.PropTypes.string
  };

  render() {
    let onCancel = (this.props.onCancel || this.props.onHideModal);

    const actions = [
      <FlatButton label="Cancel" onTouchTap={onCancel} />,
      <RaisedButton label="Ok" onTouchTap={this.props.onOk} primary keyboardFocused />
    ];

    return (
      <Dialog title="Confirmation" actions={actions} open={this.props.show} modal>
        {this.props.text || 'Confirmation text?'}
      </Dialog>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onHideModal() {
      dispatch(hideModal(ConfirmationDialog.name));
    }
  };
}

export default ConfirmationDialog = connect(null, mapDispatchToProps)(ConfirmationDialog)
