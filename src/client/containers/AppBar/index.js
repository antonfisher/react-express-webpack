import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import CircularProgress from 'material-ui/CircularProgress';
import MotorcycleIcon from 'material-ui/svg-icons/action/motorcycle';

import NavigationButton from '../../components/NavigationButton';

export class AppBarComponent extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired
  };

  render() {
    const {loading} = this.props;

    return (
      <Toolbar>
        <ToolbarGroup style={{paddingLeft: 20}} firstChild>
          <MotorcycleIcon color="white" style={{height: 40, width: 40, marginRight: 30}} />
          <NavigationButton to="/" label="Servers" />
          <NavigationButton to="/users" label="Users" />
        </ToolbarGroup>
        <ToolbarGroup>
          {loading && <CircularProgress style={{marginLeft: 20}} size={25} thickness={1} color="white" />}
          <IconButton tooltip="Search">
            <ActionSearchIcon color="white" />
          </IconButton>
          <TextField
            hintText="Search"
            style={{width: 120, marginRight: 30, marginTop: 3, fontSize: 13}}
            inputStyle={{color: 'white'}}
            hintStyle={{color: 'white'}}
            underlineFocusStyle={{borderColor: 'white'}}
          />
          {React.Children.toArray(this.props.children)}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

const AppBar = connect(mapStateToProps)(AppBarComponent);

export default AppBar;
