import React from 'react';

export default class Widget extends React.Component {
  static propTypes = {
    showBig: React.PropTypes.func.isRequired
  }
  render() {
    return <div onClick={() => this.props.showBig('hello')} className="widget">Hello World</div>;
  }
}
