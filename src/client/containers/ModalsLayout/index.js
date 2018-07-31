import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {hideModal} from 'containers/ModalsLayout/actions';
import AboutWindow from 'components/AboutWindow';
import ConfirmationDialog from 'components/ConfirmationDialog';
import ErrorWindow from 'components/ErrorWindow';

const modalComponentList = [AboutWindow, ErrorWindow, ConfirmationDialog];

export class ModalsLayout extends React.Component {
  static propTypes = {
    modals: PropTypes.object.isRequired,
    onHideModal: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);

    this._modalComponentsMap = {};
    modalComponentList.forEach((component) => {
      if (component.NAME) {
        this._modalComponentsMap[component.NAME] = component;
      } else {
        console.warn(`Component must have "NAME" property to be used as modal window: ${component}`);
      }
    });
  }

  renderModalComponent(key, props) {
    const onHideModal = this.props.onHideModal.bind(this, {key});
    return React.createElement(this._modalComponentsMap[key], {
      key,
      onHideModal,
      ...props
    });
  }

  render() {
    const {modals} = this.props;
    const children = [];

    for (const [key, props] of modals.entries()) {
      children.push(this.renderModalComponent(key, props));
    }

    return <section>{children}</section>;
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideModal(componentName) {
      dispatch(hideModal(componentName));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalsLayout);
