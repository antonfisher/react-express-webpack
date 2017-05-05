import React from 'react';
import PropTypes from 'prop-types';

import Window from 'components/Window';

class ErrorWindow extends React.Component {
  static NAME = 'ErrorWindow';

  static propTypes = {
    open: PropTypes.bool.isRequired,
    onHideModal: PropTypes.func.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    explanation: PropTypes.string
  };

  static defaultProps = {
    title: 'Error',
    message: 'Unnamed error occurred',
    explanation: ''
  };

  render() {
    const {open, title, message, explanation, onHideModal} = this.props;

    return (
      <Window title={title} open={open} onHideModal={onHideModal}>
        {message}
        <br />
        <br />
        {explanation}
      </Window>
    );
  }
}

export default ErrorWindow;
