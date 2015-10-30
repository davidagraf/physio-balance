import React from 'react';

export default class extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  componentWillMount() {
    document.body.classList.add('noscroll');
  }
  componentWillUnmount() {
    document.body.classList.remove('noscroll');
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
