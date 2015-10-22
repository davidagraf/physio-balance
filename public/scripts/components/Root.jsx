import React from 'react';
import TitleBar from 'scripts/components/TitleBar.jsx';
import ContentArea from 'scripts/components/ContentArea.jsx';
import Widget from 'scripts/components/Widget.jsx';
import WidgetBig from 'scripts/components/WidgetBig.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <ContentArea
          small={[<Widget />, <Widget />, <Widget />, <Widget />, <Widget />]}
          big={[<WidgetBig />, <WidgetBig />, <WidgetBig />, <WidgetBig />, <WidgetBig />]}
        />
        <TitleBar />
          <ContentArea
            small={[<Widget />, <Widget />, <Widget />]}
            big={[<WidgetBig />, <WidgetBig />, <WidgetBig />]}
          />
      </div>
    );
  }
}
