import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {teal500} from 'material-ui/styles/colors';

export default class ProgressBar extends React.Component {
  render() {
    return <LinearProgress mode="indeterminate" color={teal500} />;
  }
}
