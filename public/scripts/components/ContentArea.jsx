import React from 'react';
import Widget from 'scripts/components/Widget.jsx';

export default class ContentArea extends React.Component {
  showBig(arg) {
    console.log(arg);
  }
  render() {
    return (
      <div className="contentarea--wrapper">
        <div className="contentarea">
          <Widget showBig={this.showBig} />
          <Widget showBig={this.showBig} />
          <Widget showBig={this.showBig} />
          <Widget showBig={this.showBig} />
          <Widget showBig={this.showBig} />
        </div>
      </div>
    );
  }
}
