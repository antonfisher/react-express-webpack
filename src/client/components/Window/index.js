import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Window extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onHideModal: React.PropTypes.func.isRequired,
    children: React.PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  render() {
    const {children, open, onHideModal} = this.props;

    const props = {
      actions: [
        <RaisedButton label="Close" onTouchTap={onHideModal} secondary keyboardFocused />
      ],
      ...this.props
    };

    return (
      <Dialog open={open} onRequestClose={onHideModal} {...props}>
        {children}
      </Dialog>
    );
  }
}

export default Window;
