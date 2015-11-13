import React from 'react';
import Board from 'scripts/components/Board.jsx';

import Menu from 'scripts/components/bars/Menu.jsx';
import BarCompany from 'scripts/components/bars/BarCompany.jsx';
import BarPhysio from 'scripts/components/bars/BarPhysio.jsx';
import BarActive from 'scripts/components/bars/BarActive.jsx';

import Widget from 'scripts/components/widgets/Widget.jsx';
import WidgetTeam from 'scripts/components/widgets/WidgetTeam.jsx';
import WidgetSchedule from 'scripts/components/widgets/WidgetSchedule.jsx';
import WidgetContact from 'scripts/components/widgets/WidgetContact.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <BarCompany />
        <Board
          widgets={[<WidgetTeam />, <WidgetContact />, <Widget />]}
        />
        <BarPhysio />
        <Board
          widgets={[<Widget />, <Widget />]}
        />
        <BarActive/>
        <Board
          widgets={[<WidgetSchedule />]}
        />
      </div>
    );
  }
}
