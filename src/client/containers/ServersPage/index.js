import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {apiGetServers} from '../../api/actions';

export class ServersPage extends React.Component {
  static propTypes = {
    servers: React.PropTypes.object.isRequired,
    apiGetServers: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.apiGetServers();
    setTimeout(() => this.props.apiGetServers(), 1500);
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
        <br />
        <br />
        <h3>Table</h3>
        <Table multiSelectable>
          <TableHeader>
            <TableRow displayBorder>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover>
            {servers.map(({id, name}) => (
              <TableRow key={id}>
                <TableRowColumn>{id}</TableRowColumn>
                <TableRowColumn>{name}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
    apiGetServers() {
      dispatch(apiGetServers());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
