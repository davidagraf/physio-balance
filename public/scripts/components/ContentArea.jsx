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
    let big;


    if (this.state.big) {
      big = (
        <div className="contentarea__big--wrapper">
          <div className="contentarea__big--scroll">
            <div className="contentarea__big">
              <button onClick={() => this.setState({big: null})}>close</button>
              { this.state.big }
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>{big}
        <div className="contentarea__small--wrapper">
          <div className="contentarea__small">{
              this.props.small.map((child, index) => <div key={index} onClick={() => this.showBig(index)}>{child}</div>)
          }</div>
        </div>
      </div>
    );
  }
}
