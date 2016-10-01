import React from 'react';

export default class Bar extends React.Component {
  render() {
    return (
      <div className={'bar ' + (this.props.className || '')} ref="bar">
        {this.props.img}
        <div className="bar__title">{this.props.title}</div>
        {
          this.props.subtitle &&
          <div className="bar__subtitle">{this.props.subtitle}</div>
        }
        {
          this.props.infos &&
          <div className="bar__infos"><div className="bar__infos__group">{
            this.props.infos.map((info, i) => {
              return <div key={i} className="bar__infos__info">{info}</div>;
            })
          }</div></div>
        }
      </div>
    );
  }
}

Bar.propTypes = {
  img: React.PropTypes.node,
  title: React.PropTypes.node,
  subtitle: React.PropTypes.node,
  infos: React.PropTypes.arrayOf(React.PropTypes.node),
  className: React.PropTypes.string
};

Bar.defaultProps = {
  buttonStart: false
};
