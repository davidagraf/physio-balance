import React from 'react';
import ButtonNext from 'scripts/components/bars/ButtonNext.jsx';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    title: React.PropTypes.node,
    infos: React.PropTypes.arrayOf(React.PropTypes.node),
    hasNext: React.PropTypes.bool
  }
  _scrollToNext() {
    let bars = document.getElementsByClassName('bar');
    for(let i = 0; i < bars.length; ++i) {
      let bar = bars[i];
      if (bar === this.refs.bar) {
        if (++i < bars.length) {
          bars[i].scrollIntoView();
        }
        break;
      }
    }

  }
  render() {
    return (
      <div className="bar" name={this.props.title} ref="bar">
        <img className="bar__img" src={this.props.img} />
        <div className="bar__title">{this.props.title}</div>
        <div className="bar__infos">{
          (this.props.infos || []).map((info, i) => {
            return <div key={i} className="bar__infos__info">{info}</div>;
          })
        }</div>
      {( this.props.hasNext ?
        <div className="bar__next">
          <ButtonNext onClick={() => this._scrollToNext()} />
        </div> :
        null
      )}
      </div>
    );
  }
}
