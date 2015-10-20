import React from 'react';
import TitleBar from 'scripts/components/TitleBar.jsx';
import ContentArea from 'scripts/components/ContentArea.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <ContentArea />
        <TitleBar />
        <ContentArea />
      </div>
    );
  }
}
