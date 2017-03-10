import React from 'react';
import {connect} from 'react-redux';

import {hideModal} from './actions';
import AboutWindow from '../../components/AboutWindow';
import ConfirmationDialog from '../../containers/ConfirmationDialog';

const modalComponents = [
  AboutWindow,
  ConfirmationDialog
];

export class ModalsContainer extends React.Component {
  static propTypes = {
    modals: React.PropTypes.object
  };

  render() {
    const {modals} = this.props;

    return (
      <section>
        {modalComponents.map((component) => {
          const componentName = component.name;
          return React.createElement(
            component,
            {
              key: componentName,
              show: Boolean(modals.get(componentName)),
              onOk: this.props.onHideModal.bind(this, componentName),
              onCancel: this.props.onHideModal.bind(this, componentName),
              ...modals.get(componentName)
            }
          );
        })}
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

export default ModalsContainer = connect(mapStateToProps, mapDispatchToProps)(ModalsContainer);
