/* global grecaptcha */

import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  static propTypes = {
    tokenChanged: React.PropTypes.func.isRequired
  }
  componentDidMount() {
    grecaptcha.render(
      ReactDOM.findDOMNode(this.refs.captcha), {
        sitekey: '6Le_RBETAAAAAJLA28XMDU5I_bbEsxdSlWcL4ssb',
        callback: (token) => this.props.tokenChanged(token)
      });
  }
  render() {
    return (
      <div ref="captcha"></div>
    );
  }
}
