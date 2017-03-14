import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {apiGetStats} from '../../api/actions';

export class ServersPageComponent extends React.Component {
  static propTypes = {
    apiGetStats: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.apiGetStats();
  }

  render() {
    return (
      <section style={{padding: 20}}>
        <h2>Servers</h2>
        <section style={{display: 'flex', flexWrap: 'wrap'}}>
          {new Array(13).fill(true).map((n, i) => (
            <Paper
              key={String.fromCharCode(97 + i)}
              style={{marginRight: 20, marginTop: 20, minWidth: 250, padding: 15, height: 100}}
            >
              {i}
              <br />
              <br />
            </Paper>
          ))}
        </section>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetStats() {
      dispatch(apiGetStats());
    }
  };
}

const ServersPage = connect(null, mapDispatchToProps)(ServersPageComponent);

export default ServersPage;
