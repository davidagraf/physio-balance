import React from 'react';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    text: React.PropTypes.string
  }
  render() {
    return (
      <div className="bar">
        <div className="bar__text">{this.props.text}</div>
        <img className="bar__img" src={this.props.img} />
      </div>
    );
  }
}
