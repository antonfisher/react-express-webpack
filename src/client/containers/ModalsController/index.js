import React from 'react';
import {connect} from 'react-redux';

import {hideModal} from './actions';
import AboutWindow from '../../components/AboutWindow';
import ConfirmationDialog from '../../components/ConfirmationDialog';

const modalComponentList = [
  AboutWindow,
  ConfirmationDialog
];

export class ModalsControllerComponent extends React.Component {
  static propTypes = {
    modals: React.PropTypes.object.isRequired,
    onHideModal: React.PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);
    this._modalComponentsMap = modalComponentList
      .reduce((acc, item) => Object.assign({}, acc, {[item.name]: item}), {});
  }

  renderModalComponent(key, props) {
    const onHideModal = this.props.onHideModal.bind(this, key);
    return React.createElement(this._modalComponentsMap[key], {key, onHideModal, ...props});
  }

  render() {
    const {modals} = this.props;
    const openedModalKeys = [];
    const children = [];

    for (const [key, props] of modals.entries()) {
      openedModalKeys.push(key);
      children.push(this.renderModalComponent(key, {open: true, ...props}));
    }

    // need to add all modals for fade-out animation
    for (const key in this._modalComponentsMap) {
      if (!openedModalKeys.includes(key)) {
        children.unshift(this.renderModalComponent(key, {open: false}));
      }
    }

    return (
      <section>
        {children}
      </section>
    );
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

const ModalsController = connect(mapStateToProps, mapDispatchToProps)(ModalsControllerComponent);

export default ModalsController;
