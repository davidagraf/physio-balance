import React from 'react';

export default class Board extends React.Component {
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

Board.propTypes = {
  widgets: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
};
