import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class Widget extends React.Component {
  render() {
    return (
      <div>
        <Link tabIndex="-1" className="widget link" to={this.props.path}>
          <div className="widget__img">
            {
              this.props.img && <img src={this.props.img}/>
              || this.props.content && this.props.content
            }
          </div>
          <div className="widget__text"><div className="widget__text__content">{
            this.props.text
          }</div></div>
        </Link>
      </div>
    );
  }
}

Widget.propTypes = {
  img: PropTypes.string,
  content: PropTypes.node,
  text: PropTypes.string,
  path: PropTypes.string.isRequired
};
