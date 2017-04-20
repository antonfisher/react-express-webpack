import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import AppBar from '../AppBar';
import ProgressBar from '../../components/ProgressBar';
import AppMenu from '../AppMenu';
import ModalsLayout from '../ModalsLayout';

export class App extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
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
          {React.Children.toArray(this.props.children)}
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
