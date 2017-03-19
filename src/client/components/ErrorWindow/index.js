import React from 'react';
import Window from '../Window';

class ErrorWindow extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired,
    onHideModal: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    message: 'An error occurred lol.'
  };

  render() {
    const {open, message, onHideModal} = this.props;

    return (
      <Window title="Error" open={open} onHideModal={onHideModal}>
        {message}
      </Window>
    );
  }
}

export default ErrorWindow;
