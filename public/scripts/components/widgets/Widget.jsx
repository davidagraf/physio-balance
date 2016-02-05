import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Modal from 'scripts/components/modals/Modal.jsx';
import { openModal } from 'scripts/actions';

export default class Widget extends React.Component {
  _openModal() {
    this.props.openModal(this.props.modal);
  }
  render() {
    return (
      <div>
        <a className="widget" onClick={() => this._openModal()}>
          <div className="widget__img">
            {
              this.props.img && <img src={this.props.img}/>
              || this.props.content && this.props.content
            }
          </div>
          <div className="widget__text"><div className="widget__text__content">{
            this.props.text
          }</div></div>
        </a>
      </div>
    );
  }
}

Widget.propTypes = {
  img: React.PropTypes.string,
  content: React.PropTypes.node,
  text: React.PropTypes.string,
  modal: React.PropTypes.element,
  openModal: React.PropTypes.func.isRequired
};

Widget.defaultProps = {
  modal: <Modal />
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Widget);
