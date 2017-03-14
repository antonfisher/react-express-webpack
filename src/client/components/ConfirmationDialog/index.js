import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from '../FlatButton';

class ConfirmationDialog extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onHideModal: React.PropTypes.func.isRequired,
    onOk: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    text: React.PropTypes.string
  };

  static defaultProps = {
    onOk: null,
    onCancel: null,
    text: 'Confirmation text?'
  };

  render() {
    const {open, text, onHideModal} = this.props;
    const onOk = () => (this.props.onOk ? this.props.onOk(onHideModal) : onHideModal());
    const onCancel = () => (this.props.onCancel ? this.props.onCancel(onHideModal) : onHideModal());

    const actions = [
      <FlatButton label="Cancel" onTouchTap={onCancel} />,
      <RaisedButton label="Ok" onTouchTap={onOk} primary keyboardFocused />
    ];

    return (
      <Dialog title="Confirmation" actions={actions} open={open} modal>
        {text}
      </Dialog>
    );
  }
}

export default ConfirmationDialog;
