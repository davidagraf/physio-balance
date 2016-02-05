import React from 'react';

import { connect } from 'react-redux';

export default class ModalManager extends React.Component {
  _checkEsc(ev) {
    if (ev.keyCode === 27) {
      window.history.back();
    }
  }
  componentDidMount() {
    this._checkEscThis = this._checkEsc.bind(this);
    window.addEventListener('keydown', this._checkEscThis);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._checkEscThis);
  }
  componentDidUpdate() {
    if (this.props.modals.length > 0) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  }
  render() {
    return (
      <div>{this.props.modals.map((modal, i) => {
        return <div className="modalmanager" key={i} style={{zIndex : 300 + i}}>{modal}</div>
      })}</div>
    );
  }
}

ModalManager.propTypes = {
  modals: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    modals: state.modals.modals
  }
}

export default connect(mapStateToProps)(ModalManager);
