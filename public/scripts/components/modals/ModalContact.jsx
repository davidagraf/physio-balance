/* global process */

import React from 'react';
import request from 'superagent';
import Modal from 'scripts/components/modals/Modal.jsx';

import GoogleMap from 'scripts/components/atomic/GoogleMap.jsx';

// import Input from 'scripts/components/atomic/Input.jsx'
// import Captcha from 'scripts/components/atomic/Captcha.jsx';

const DEFAULT_STATE = {
  email: '',
  subject: '',
  text: '',
  captchaToken: null,
  success: false,
  error: null
};

export default class extends React.Component {
  state = DEFAULT_STATE
  _submit(e) {
    e.preventDefault();

    request.post('https://physio-balance.appspot.com/contact')
    // request.post('http://localhost:8080/contact')
    .send({
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text,
      captchaToken: this.state.captchaToken,
      dev: (process.env.NODE_ENV !== 'production')
    }).end((err, resp) => {
      if (err) {
        this.setState({error: err.message || resp.text});
      } else {
        this.setState({success: true});
      }
    });
  }
  _reset() {
    this.setState(DEFAULT_STATE);
  }
  render() {
    // let formContent;

    // if (this.state.error) {
    //   formContent = (
    //     <div>
    //       <div>Fehler: {this.state.error}</div>
    //       <div><button onClick={() => this._reset()}>erneute Anfrage</button></div>
    //     </div>
    //   );
    // } else if (this.state.success) {
    //   formContent = (
    //     <div>
    //       <div>Anfrage erfolgreich gesendet.</div>
    //       <div><button onClick={() => this._reset()}>erneute Anfrage</button></div>
    //     </div>
    //   );
    // } else {
    //   formContent = (
    //     <form onSubmit={(e) => this._submit(e)}>
    //       <Input label="EMail" field={
    //         <input type="email" value={this.state.email} required
    //           onChange={(ev) => this.setState({email: ev.target.value})} />
    //       } />
    //       <Input label="Betreff" field={
    //         <input type="text" value={this.state.subject} required
    //           onChange={(ev) => this.setState({subject: ev.target.value})} />
    //       } />
    //       <Input label="Text" field={
    //         <textarea value={this.state.text} required
    //           onChange={(ev) => this.setState({text: ev.target.value})} />
    //       } />
    //       <Input label="Spamschutz" field={
    //         <Captcha tokenChanged={(token) => this.setState({captchaToken: token})} />
    //       } />
    //       <Input field={
    //         <input type="submit" value="Senden" />
    //       } />
    //     </form>
    //   );
    // }

    return (
      <Modal title="Kontakt">
        <p>
          physio balance gmbh<br/>
          Widengasse 16<br/>
          5070 Frick<br/>
          team@physiobalance.fit<br/>
          062 871 16 20
        </p>
        <GoogleMap address="Widengasse 16 5070 Frick" />
      </Modal>
    );
  }
}
