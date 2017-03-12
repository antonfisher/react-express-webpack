import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class AboutWindow extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onHideModal: React.PropTypes.func.isRequired
  };

  render() {
    const {open, onHideModal} = this.props;

    const actions = [
      <RaisedButton label="Ok" onTouchTap={onHideModal} secondary keyboardFocused />
    ];

    return (
      <Dialog title="About" actions={actions} open={open} modal>
        Here is about window.
      </Dialog>
    );
  }
}

export default AboutWindow;
