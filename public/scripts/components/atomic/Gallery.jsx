import React from 'react';

import GalleryModal from 'scripts/components/atomic/GalleryModal.jsx';

import ModalStore from 'scripts/stores/ModalStore.js';
import { MODAL_OPEN } from 'scripts/constants/ActionTypes.js';

export default class extends React.Component {
  static propTypes = {
    uris: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  }
  _open(index) {
    ModalStore.dispatch({type: MODAL_OPEN, modal: <GalleryModal startIndex={index} uris={this.props.uris} />});
  }
  render() {
    return (
      <div className="gallery"><div className="gallery__wrapper">{
        this.props.uris.map((uri, i) => {
          return <div key={i} className="gallery__thumbnail" onClick={() => this._open(i)} ><img src={uri} /></div>;
        })
      }</div></div>
    );
  }
}
