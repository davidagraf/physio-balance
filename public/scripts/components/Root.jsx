import React from 'react';
import Board from 'scripts/components/Board.jsx';

//import Menu from 'scripts/components/bars/Menu.jsx';
import BarCompany from 'scripts/components/bars/BarCompany.jsx';
import BarPhysio from 'scripts/components/bars/BarPhysio.jsx';
import BarActive from 'scripts/components/bars/BarActive.jsx';

import ModalManager from 'scripts/components/modals/ModalManager.jsx';
import WidgetTeam from 'scripts/components/widgets/WidgetTeam.jsx';
import WidgetContact from 'scripts/components/widgets/WidgetContact.jsx';
import WidgetConcept from 'scripts/components/widgets/WidgetConcept.jsx';
import WidgetRooms from 'scripts/components/widgets/WidgetRooms.jsx';
import WidgetFacebook from 'scripts/components/widgets/WidgetFacebook.jsx';

import WidgetPhysioOffer from 'scripts/components/widgets/WidgetPhysioOffer.jsx';
import WidgetPhysioInfos from 'scripts/components/widgets/WidgetPhysioInfos.jsx';

import WidgetActiveSchedule from 'scripts/components/widgets/WidgetActiveSchedule.jsx';
import WidgetActivePrices from 'scripts/components/widgets/WidgetActivePrices.jsx';
import WidgetActiveOffer from 'scripts/components/widgets/WidgetActiveOffer.jsx';

import Sponsors from 'scripts/components/Sponsors.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <ModalManager />
        <BarCompany />
        <Board
          widgets={[<WidgetTeam />, <WidgetConcept />, <WidgetContact />, <WidgetRooms />, <WidgetFacebook />]}
        />
        <BarPhysio />
        <Board
          widgets={[<WidgetPhysioOffer />, <WidgetPhysioInfos />]}
        />
        <BarActive/>
        <Board
          widgets={[<WidgetActiveOffer />, <WidgetActiveSchedule />, <WidgetActivePrices />]}
        />
        <Sponsors />
      </div>
    );
  }
}
