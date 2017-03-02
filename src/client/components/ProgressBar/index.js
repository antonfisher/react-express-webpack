import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {lightGreen700} from 'material-ui/styles/colors';

export default class ProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: 0
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
      clearTimeout(this.timer);
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (<LinearProgress mode="determinate" value={this.state.completed} color={lightGreen700} />);
  }
}
