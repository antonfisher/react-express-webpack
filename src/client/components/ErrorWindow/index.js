import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class ErrorWindow extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired,
    onHideModal: React.PropTypes.func.isRequired
  };

  render() {
    const {open, message, onHideModal} = this.props;

    const actions = [
      <RaisedButton label="Close" onTouchTap={onHideModal} />
    ];

    return (
      <Dialog title="Error" actions={actions} open={open} modal>
        {message}
      </Dialog>
    );
  }
}

export default ErrorWindow;
