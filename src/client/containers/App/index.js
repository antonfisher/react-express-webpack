import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Paper from 'material-ui/Paper';

import AppBar from 'containers/AppBar';
import AppMenu from 'containers/AppMenu';
import ModalsLayout from 'containers/ModalsLayout';
import NotFound from 'containers/NotFound';
import ServersPage from 'containers/ServersPage';
import ProgressBar from 'components/ProgressBar';

export class App extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  render() {
    const {loading} = this.props;

    return (
      <section>
        <Paper zDepth={1} style={{position: 'fixed', width: '100%', zIndex: 10}}>
          <AppBar>
            <AppMenu />
          </AppBar>
          {loading && <ProgressBar />}
        </Paper>
        <section style={{paddingTop: 50}}>
          <Switch>
            <Route path="/servers" component={ServersPage} />
            <Route path="/users" name="home-users" component={NotFound} />
            <Redirect to="/servers" />
          </Switch>
        </section>
        <ModalsLayout />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

export default connect(mapStateToProps)(App);
