import React from 'react';
import Icon from 'scripts/components/atomic/Icon.jsx';

import ModalStore from 'scripts/stores/ModalStore.js';

export default class extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    start: React.PropTypes.bool
  }
  static defaultProps = {
    start: false
  }
  state = {
    modalOpen: false
  }
  componentWillMount() {
    this._unsubscribe = ModalStore.subscribe(() => {
      this.setState({modalOpen: !!(ModalStore.getState().modal)});
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    const iconName = ( this.props.start ? 'angle-down' : 'angle-down' );

    if (this.state.modalOpen) {
      return (
        <button tabIndex="-1" className="button--next" onClick={(ev) => this.props.onClick(ev)}>
          <Icon name={iconName} />
        </button>
      );
    } else {
      return (
        <button className="button--next" onClick={(ev) => this.props.onClick(ev)}>
          <Icon name={iconName} />
        </button>
      );
    }
  }
}
