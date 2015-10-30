import React from 'react';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    text: React.PropTypes.string
  }
  render() {
    return (
      <div className="widget">
        <div className="widget__img">
          <img src={this.props.img}/>
        </div>
        <div className="widget__text">{this.props.text}</div>
      </div>
    );
  }
}
