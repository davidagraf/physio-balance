import React from 'react';
import Board from 'scripts/components/Board.jsx';

import Menu from 'scripts/components/bars/Menu.jsx';
import BarCompany from 'scripts/components/bars/BarCompany.jsx';
import BarPhysio from 'scripts/components/bars/BarPhysio.jsx';
import BarActive from 'scripts/components/bars/BarActive.jsx';

import ModalManager from 'scripts/components/modals/ModalManager.jsx';
import Widget from 'scripts/components/widgets/Widget.jsx';
import WidgetTeam from 'scripts/components/widgets/WidgetTeam.jsx';
import WidgetSchedule from 'scripts/components/widgets/WidgetSchedule.jsx';
import WidgetContact from 'scripts/components/widgets/WidgetContact.jsx';
import WidgetConcept from 'scripts/components/widgets/WidgetConcept.jsx';
import WidgetRooms from 'scripts/components/widgets/WidgetRooms.jsx';
import WidgetFacebook from 'scripts/components/widgets/WidgetFacebook.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Menu/>
        <BarCompany />
        <Board
          widgets={[<WidgetTeam />, <WidgetConcept />, <WidgetContact />, <WidgetRooms />, <WidgetFacebook />]}
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
