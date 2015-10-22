import React from 'react';

export default class ContentArea extends React.Component {
  static propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  }
  showBig(arg) {
    console.log(arg);
  }
  render() {
    return (
      <div className="contentarea--wrapper">
        <div className="contentarea">{
          this.props.children.map((child, index) => <div key={index} onClick={() => this.showBig(child)}>{child}</div>)
        }</div>
      </div>
    );
  }
}
