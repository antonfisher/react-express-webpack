import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MotorcycleIcon from 'material-ui/svg-icons/action/motorcycle';

import NavigationButton from '../../components/NavigationButton';

export default class AppBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  };

  render() {
    const {children} = this.props;

    return (
      <Toolbar>
        <ToolbarGroup style={{paddingLeft: 20}} firstChild>
          <MotorcycleIcon color="white" style={{height: 40, width: 40, marginRight: 30}} />
          <NavigationButton to="/" label="Servers" />
          <NavigationButton to="/users" label="Users" />
        </ToolbarGroup>
        <ToolbarGroup>
          <TextField
            hintText="Search"
            style={{width: 120, marginLeft: 20, marginTop: 3, fontSize: 13}}
            inputStyle={{color: 'white'}}
            hintStyle={{color: 'white'}}
            underlineFocusStyle={{borderColor: 'white'}}
          />
          <IconButton tooltip="Search">
            <ActionSearchIcon color="white" />
          </IconButton>
          {children}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
