import React from 'react';
import Window from '../Window';

class AboutWindow extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onHideModal: React.PropTypes.func.isRequired
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
