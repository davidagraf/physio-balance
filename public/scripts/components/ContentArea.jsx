import React from 'react';

export default class extends React.Component {
  static propTypes = {
    small: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
    big: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  }
  state = {
    big: null
  }
  showBig(index) {
    this.setState({big: this.props.big[index]});
  }
  render() {
    if (this.state.big) {
      return (
        <div className="contentarea__big">
          <button onClick={() => this.setState({big: null})}>close</button>{
          this.state.big
        }</div>
      );
    } else {
      return (
        <div className="contentarea__small--wrapper">
          <div className="contentarea__small">{
              this.props.small.map((child, index) => <div key={index} onClick={() => this.showBig(index)}>{child}</div>)
          }</div>
        </div>
      );
    }
  }
}
