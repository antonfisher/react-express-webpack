import React from 'react';
import PropTypes from 'prop-types';
import Window from '../Window';

class ErrorWindow extends React.Component {
  static NAME = 'ErrorWindow';

  static propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onHideModal: PropTypes.func.isRequired
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
