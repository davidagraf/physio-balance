import React from 'react';

export default class extends React.Component {
  static propTypes = {
    widgets: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
    modals: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  }
  state = {
    modal: null
  }
  showModal(index) {
    this.setState({modal: this.props.modals[index]});
  }
  render() {
    let big;

    if (this.state.modal) {
      big = (
        <div className="board__modal--wrapper">
          <div className="board__modal--scroll">
            <div className="board__modal">
              <button onClick={() => this.setState({modal: null})}>close</button>
              { this.state.modal }
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>{big}
        <div className="board__widgets--wrapper">
          <div className="board__widgets">{
              this.props.widgets.map(
                (child, index) => <div key={index} onClick={() => this.showModal(index)}>{child}</div>
              )
          }</div>
        </div>
      </div>
    );
  }
}
