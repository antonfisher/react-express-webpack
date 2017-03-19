import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {lightGreen700} from 'material-ui/styles/colors';

export default class ProgressBar extends React.Component {
  render() {
    return (<LinearProgress mode="indeterminate" color={lightGreen700} />);
  }
}
