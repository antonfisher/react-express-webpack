import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class StyledFlatButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
  };

  static defaultProps = {
    children: null,
    style: {}
  };

  render() {
    const style = Object.assign({}, {lineHeight: '33px'}, this.props.style);

    return (
      <FlatButton {...this.props} style={style}>
        {React.Children.toArray(this.props.children)}
      </FlatButton>
    );
  }
}

export default StyledFlatButton;
