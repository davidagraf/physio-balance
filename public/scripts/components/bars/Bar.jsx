import React from 'react';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    text: React.PropTypes.string
  }
  render() {
    return (
      <div className="titlebar">
        <div className="titlebar__text">{this.props.text}</div>
        <img className="titlebar__img" src={this.props.img} />
      </div>
    );
  }
}
