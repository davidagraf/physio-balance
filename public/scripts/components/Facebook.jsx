/* global FB, process */

import moment from 'moment';
import React from 'react';
import Spinner from 'scripts/components/atomic/Spinner.jsx';
import Error from 'scripts/components/atomic/Error.jsx';

const APP_ID = (process.env.NODE_ENV == 'production' ? '691100814354778' : '718726034925589');
const APP_ACCESS_TOKEN = (
  process.env.NODE_ENV == 'production' ?
  '691100814354778|iSb_maGHNC9x7zyG9oUD7FGFHdw' :
  '718726034925589|RQQdhc0N8UgJU0b1iiuA3_y8XE0'
);

export default class extends React.Component {
  state = {
    posts: null,
    error: false
  }
  _loadFBData() {
    FB.init({
      appId      : APP_ID,
      xfbml      : true,
      version    : 'v2.5'
    });

    FB.api('/physiobalance.fit/posts', {access_token: APP_ACCESS_TOKEN}, (response) => {
      if (response.data) {
        this.setState({
          posts: response.data.filter((post) => {
            return !!post.message;
          })
        });
      } else {
        this.setState({
          error: true
        });
      }
    });
  }
  componentWillMount() {
    if (window.FB) {
      this._loadFBData();
    } else {
      window.fbAsyncInit = () => {
        this._loadFBData();
      };
    }
  }
  _openFacebook() {
    // let nativeOpened = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    //   && window.open('fb://pages/physiobalance.fit');

    // if (!nativeOpened) {
    window.open('https://www.facebook.com/physiobalance.fit', '_blank');
    // }
  }
  render() {
    let content;

    if (this.state.posts) {
      content = this.state.posts.slice(0, 3).map((post, i) => {
        let msg = post.message;
        if (msg.length > 320) {
          msg = msg.substring(0, 320) + '...';
        }
        return (
          <div key={i} className="facebook__post">
            <div className="facebook__post__date">{moment(post.created_time).format('DD.MM.YYYY')}</div>
            <div className="facebook__post__message">{msg}</div>
          </div>
        );
      })
    } else if (this.state.error) {
      content = <Error />;
    } else {
      content = <Spinner />;
    }

    return <div className="facebook" onClick={() => this._openFacebook()}>{content}</div>;
  }
}
