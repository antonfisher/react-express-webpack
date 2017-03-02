import React from 'react';

import AppBar from '../../components/AppBar';
import ProgressBar from '../../components/ProgressBar';
import AppMenu from '../AppMenu';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  };

  render() {
    return (
      <section>
        <ProgressBar />
        <AppBar>
          <AppMenu />
        </AppBar>
        {React.Children.toArray(this.props.children)}
      </section>
    );
  }
}
