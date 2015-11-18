import React from 'react';
import request from 'superagent';
import Modal from 'scripts/components/modals/Modal.jsx';

const DEFAULT_STATE = {
  email: '',
  subject: '',
  text: '',
  success: false,
  error: null
};

export default class extends React.Component {
  state = DEFAULT_STATE
  _submit(e) {
    e.preventDefault();

    request.post('https://physio-balance.appspot.com/contact')
    .send({
      email: this.state.email,
      subject: this.state.email,
      text: this.state.text
    }).end((err) => {
      if (err) {
        this.setState({error: err.text});
      } else {
        this.setState({success: true});
      }
    });
  }
  _reset() {
    this.setState(DEFAULT_STATE);
  }
  render() {
    let content;

    if (this.state.error) {
      content = (
        <div>
          <div>Fehler: {this.state.error}</div>
          <div><button onClick={() => this._reset()}>erneute Anfrage</button></div>
        </div>
      );
    } else if (this.state.success) {
      content = (
        <div>
          <div>Anfrage erfolgreich gesendet.</div>
          <div><button onClick={() => this._reset()}>erneute Anfrage</button></div>
        </div>
      );
    } else {
      content = (
        <form onSubmit={(e) => this._submit(e)}>
          <div>
            EMail:
            <input type="email" placeholder="Deine EMail" value={this.state.email} required
              onChange={(ev) => this.setState({email: ev.target.value})} />
          </div>
          <div>
            Betreff:
            <input type="text" placeholder="Betreff" value={this.state.subject} required
              onChange={(ev) => this.setState({subject: ev.target.value})} />
          </div>
          <div>
            Text:
            <textarea placeholder="Text" value={this.state.text} required
              onChange={(ev) => this.setState({text: ev.target.value})} />
          </div>
          <div>
            <input type="submit" value="Senden"/>
          </div>
          <div className="g-recaptcha" data-sitekey="6Le_RBETAAAAAJLA28XMDU5I_bbEsxdSlWcL4ssb"></div>
        </form>
      );
    }

    return <Modal title="Kontakt">{content}</Modal>;
  }
}
