import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Board from 'scripts/components/Board.jsx';
import Facebook from 'scripts/components/Facebook.jsx';

import BarCompany from 'scripts/components/bars/BarCompany.jsx';

import WidgetTeam from 'scripts/components/widgets/WidgetTeam.jsx';
import WidgetConcept from 'scripts/components/widgets/WidgetConcept.jsx';
import WidgetContact from 'scripts/components/widgets/WidgetContact.jsx';
import WidgetRooms from 'scripts/components/widgets/WidgetRooms.jsx';

import WidgetPhysioOffer from 'scripts/components/widgets/WidgetPhysioOffer.jsx';
import WidgetPhysioInfos from 'scripts/components/widgets/WidgetPhysioInfos.jsx';

import ModalConcept from 'scripts/components/modals/ModalConcept.jsx';
import ModalContact from 'scripts/components/modals/ModalContact.jsx';
import ModalPhysioInfos from 'scripts/components/modals/ModalPhysioInfos.jsx';
import ModalPhysioOffer from 'scripts/components/modals/ModalPhysioOffer.jsx';
import ModalRooms from 'scripts/components/modals/ModalRooms.jsx';
import ModalTeam from 'scripts/components/modals/ModalTeam.jsx';

import Footer from 'scripts/components/Footer.jsx';

class Content extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <BarCompany />
        <Facebook />
        <Board
          widgets={[
            <WidgetTeam />, <WidgetConcept />, <WidgetContact/>, <WidgetRooms />,
            <WidgetPhysioOffer />, <WidgetPhysioInfos />
          ]}
        />
        <Footer />
      </div>
    );
  }
}

Content.propTypes = {
  children: React.PropTypes.node
}

export default class extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/concept" children={<Content><ModalConcept/></Content>} />
          <Route path="/contact" children={<Content><ModalContact/></Content>} />
          <Route path="/physioinfos" children={<Content><ModalPhysioInfos/></Content>} />
          <Route path="/physiooffer" children={<Content><ModalPhysioOffer/></Content>} />
          <Route path="/rooms" children={<Content><ModalRooms/></Content>} />
          <Route path="/team" children={<Content><ModalTeam/></Content>} />
          <Route path="*" component={Content}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
