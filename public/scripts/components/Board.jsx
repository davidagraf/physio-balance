import React from 'react';
import PropTypes from 'prop-types';

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
  widgets: PropTypes.arrayOf(PropTypes.element).isRequired
};
