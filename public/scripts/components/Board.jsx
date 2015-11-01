import React from 'react';

export default class extends React.Component {
  static propTypes = {
    widgets: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  }
  render() {
    return (
      <div className="board">
        <div className="board__content">{
            this.props.widgets.map(
              (child, index) => <div key={index}>{child}</div>
            )
        }</div>
      </div>
    );
  }
}
