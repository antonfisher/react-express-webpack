import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Window extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onHideModal: PropTypes.func.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  render() {
    const {children, open, onHideModal} = this.props;

    const props = {
      actions: [<RaisedButton label="Close" onClick={onHideModal} secondary keyboardFocused />],
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
