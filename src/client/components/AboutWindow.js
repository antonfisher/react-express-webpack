import React from 'react';
import PropTypes from 'prop-types';
import Window from 'components/Window';

class AboutWindow extends React.Component {
  static NAME = 'AboutWindow';

  static propTypes = {
    open: PropTypes.bool.isRequired,
    onHideModal: PropTypes.func.isRequired
  };

  render() {
    const {open, onHideModal} = this.props;

    return (
      <Window title="About" open={open} onHideModal={onHideModal}>
        Here is about window.
      </Window>
    );
  }
}

export default AboutWindow;
