import React from 'react';

import { Link } from 'react-router';

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
  img: React.PropTypes.string,
  content: React.PropTypes.node,
  text: React.PropTypes.string,
  path: React.PropTypes.string.isRequired
};
