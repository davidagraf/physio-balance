/* global FB, process */

import React from 'react';
import Spinner from 'scripts/components/atomic/Spinner.jsx';

const APP_ID = (process.env.NODE_ENV == 'production' ? '691100814354778' : '718726034925589');
const APP_ACCESS_TOKEN = (
  process.env.NODE_ENV == 'production' ?
  '691100814354778|iSb_maGHNC9x7zyG9oUD7FGFHdw' :
  '718726034925589|RQQdhc0N8UgJU0b1iiuA3_y8XE0'
);

function fill(n) {
  return ('00' + n).slice(-2);
}

export default class extends React.Component {
  state = {
    posts: null
  }
  _loadFBData() {
    FB.init({
      appId      : APP_ID,
      xfbml      : true,
      version    : 'v2.5'
    });

    FB.api('/physiobalance.fit/posts', {access_token: APP_ACCESS_TOKEN}, (response) => {
      this.setState({
        posts: response.data.filter((post) => {
          return !!post.message;
        })
      });
    });
  }
  componentWillMount() {
    if (FB) {
      this._loadFBData();
    } else {
      window.fbAsyncInit = () => {
        this._loadFBData();
      };
    }
  }
  _openFacebook() {
    window.open('https://www.facebook.com/physiobalance.fit', '_blank');
  }
  render() {
    return (
       <div className="facebook" onClick={() => this._openFacebook()}>
         {
         this.state.posts && this.state.posts.slice(0, 3).map((post, i) => {
           let msg = post.message;
           if (msg.length > 320) {
             msg = msg.substring(0, 320) + '...';
           }
           let date = new Date(post.created_time);
           let dateString = fill(date.getDate()) + '.' + fill(date.getMonth() + 1) + '.' + date.getFullYear();
           return (
             <div key={i} className="facebook__post">
               <div className="facebook__post__date">{dateString}</div>
               <div className="facebook__post__message">{msg}</div>
             </div>
           );
         })
       }{
         !this.state.posts && <Spinner />
       }
      </div>
    );
  }
}
