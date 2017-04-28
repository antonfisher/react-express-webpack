import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {FormattedMessage, FormattedRelative} from 'react-intl';
import {apiAddServer, apiGetServers} from '../../api/actions';
import styles from './serversPage.scss';

export class ServersPage extends React.Component {
  static propTypes = {
    servers: PropTypes.object.isRequired,
    apiAddServer: PropTypes.func.isRequired,
    apiGetServers: PropTypes.func.isRequired,
    serversLastUpdate: PropTypes.number
  };

  static defaultProps = {
    serversLastUpdate: null
  };

  componentDidMount() {
    this.props.apiGetServers();
    setTimeout(() => this.props.apiGetServers(), 1500);
  }

  render() {
    const {servers, serversLastUpdate} = this.props;

    return (
      <section style={{padding: 20}}>
        <h2>
          <FormattedMessage id="app.servers.title" defaultMessage="Servers" />
          {serversLastUpdate &&
            <span className={styles.lastUpdate}>
              (updated <FormattedRelative value={serversLastUpdate} />)
            </span>
          }
        </h2>
        <TextField
          style={{marginRight: 10}}
          onChange={(e, value) => {
            this.addServerTextFieldValue = value;
          }}
          hintText={<FormattedMessage id="app.servers.addServer.hintText" defaultMessage="Add server" />}
        />
        <RaisedButton
          label={<FormattedMessage id="app.servers.addServer.button" defaultMessage="Add server" />}
          onTouchTap={() => {
            this.props.apiAddServer({name: this.addServerTextFieldValue});
          }}
        />
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
    servers: state.api.getIn(['data', 'servers']),
    serversLastUpdate: state.api.getIn(['lastUpdate', 'servers'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetServers() {
      dispatch(apiGetServers());
    },
    apiAddServer(data) {
      dispatch(apiAddServer(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
