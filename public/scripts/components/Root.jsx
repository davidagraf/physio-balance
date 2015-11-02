import React from 'react';
import Board from 'scripts/components/Board.jsx';

import Bar from 'scripts/components/bars/Bar.jsx';
import BarCompany from 'scripts/components/bars/BarCompany.jsx';

import Widget from 'scripts/components/widgets/Widget.jsx';
import WidgetTeam from 'scripts/components/widgets/WidgetTeam.jsx';
import WidgetSchedule from 'scripts/components/widgets/WidgetSchedule.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <BarCompany />
        <Board
          widgets={[<WidgetTeam />, <Widget />, <Widget />, <Widget />, <Widget />]}
        />
        <Bar />
        <Board
          widgets={[<Widget />, <WidgetSchedule />, <Widget />]}
        />
      </div>
    );
  }
}
