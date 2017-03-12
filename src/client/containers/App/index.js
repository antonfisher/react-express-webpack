import React from 'react';
import Paper from 'material-ui/Paper';

import AppBar from '../../components/AppBar';
import ProgressBar from '../../components/ProgressBar';
import AppMenu from '../AppMenu';
import ModalsController from '../ModalsController';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  };

  render() {
    return (
      <section>
        <Paper zDepth={1} style={{position: 'fixed', width: '100%'}}>
          <ProgressBar />
          <AppBar>
            <AppMenu />
          </AppBar>
        </Paper>
        <section style={{paddingTop: 50}}>
          {React.Children.toArray(this.props.children)}
        </section>
        <ModalsController />
      </section>
    );
  }
}
