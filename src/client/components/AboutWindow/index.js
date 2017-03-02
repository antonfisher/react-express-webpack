import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class AboutWindow extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    onOk: React.PropTypes.func.isRequired
  };

  render() {
    const actions = [
      <RaisedButton label="Ok" onTouchTap={this.props.onOk} secondary keyboardFocused />
    ];

    return (
      <Dialog title="About" actions={actions} open={this.props.show} modal>
        Here is about window.
      </Dialog>
    );
  }
}

export default AboutWindow;
