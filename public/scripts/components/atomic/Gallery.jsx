import React from 'react';

export default class extends React.Component {
  static propTypes = {
    uris: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  }
  render() {
    return (
      <div className="gallery"><div className="gallery__wrapper">{
        this.props.uris.map((uri, i) => {
          return <img key={i} className="gallery__thumbnail" src={uri} />;
        })
      }</div></div>
    );
  }
}
