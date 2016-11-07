import React from 'react';

import GalleryModal from 'scripts/components/atomic/GalleryModal.jsx';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStartIndex: null
    };
  }
  render() {
    return (
      <div className="gallery">{
        this.state.modalStartIndex !== null &&
          <GalleryModal startIndex={this.state.modalStartIndex} uris={this.props.uris}
                        close={() => this.setState({modalStartIndex: null})}/>
        }<div className="gallery__wrapper">{
          this.props.uris.map((uri, i) => {
            return (
              <div key={i} className="gallery__thumbnail" onClick={() => this.setState({modalStartIndex: i})} >
                <img src={uri} />
              </div>
            );
          })
        }</div>
      </div>
    );
  }
}

Gallery.propTypes = {
  uris: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}
