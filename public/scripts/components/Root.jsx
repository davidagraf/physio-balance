import React from 'react';
import TitleBar from 'scripts/components/TitleBar.jsx';
import ContentArea from 'scripts/components/ContentArea.jsx';
import Widget from 'scripts/components/Widget.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <ContentArea>
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </ContentArea>
        <TitleBar />
        <ContentArea>
          <Widget />
          <Widget />
          <Widget />
        </ContentArea>
      </div>
    );
  }
}
