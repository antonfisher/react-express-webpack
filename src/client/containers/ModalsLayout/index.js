import React from 'react';
import {connect} from 'react-redux';

import {hideModal} from './actions';
import AboutWindow from '../../components/AboutWindow';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import ErrorWindow from '../../components/ErrorWindow';

const modalComponentList = [
  AboutWindow,
  ErrorWindow,
  ConfirmationDialog
];

export class ModalsLayout extends React.Component {
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
    const onHideModal = this.props.onHideModal.bind(this, {key});
    return React.createElement(this._modalComponentsMap[key], {key, onHideModal, ...props});
  }

  render() {
    const {modals} = this.props;
    const children = [];

    for (const [key, props] of modals.entries()) {
      children.push(this.renderModalComponent(key, props));
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalsLayout);
