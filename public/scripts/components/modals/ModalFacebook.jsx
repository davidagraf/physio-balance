import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  componentWillMount() {
    // (function(d, s, id) {
    //   let js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s); js.id = id;
    //   js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=691100814354778';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
  }
  render() {
    return (
      <Modal title="Facebook">
        <div id="fb-root"></div>
        <div className="fb-page"
          data-href="https://www.facebook.com/teslamotors" data-width="500" data-height="500"
          data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
          data-show-facepile="true" data-show-posts="true">
          <div className="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/teslamotors">
              <a href="https://www.facebook.com/teslamotors">Tesla Motors</a>
            </blockquote>
          </div>
        </div>
      </Modal>
    );
  }
}
