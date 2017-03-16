import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {apiGetStats} from '../../api/actions';

export class ServersPageComponent extends React.Component {
  static propTypes = {
    servers: React.PropTypes.object.isRequired,
    apiGetStats: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.apiGetStats();
    setTimeout(() => this.props.apiGetStats(), 5000);
  }

  render() {
    const {servers} = this.props;

    return (
      <section style={{padding: 20}}>
        <h2>Servers</h2>
        <section style={{display: 'flex', flexWrap: 'wrap'}}>
          {servers.map(({id, name}) => (
            <Paper key={id} style={{marginRight: 20, marginTop: 20, minWidth: 250, padding: 15, height: 100}}>
              {id}: {name}
              <br />
              <br />
            </Paper>
          ))}
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    servers: state.api.getIn(['data', 'servers'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetStats() {
      dispatch(apiGetStats());
    }
  };
}

const ServersPage = connect(mapStateToProps, mapDispatchToProps)(ServersPageComponent);

export default ServersPage;
