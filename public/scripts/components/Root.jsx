import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Board from 'scripts/components/Board.jsx';
import Facebook from 'scripts/components/Facebook.jsx';

//import Menu from 'scripts/components/bars/Menu.jsx';
import BarCompany from 'scripts/components/bars/BarCompany.jsx';

import WidgetTeam from 'scripts/components/widgets/WidgetTeam.jsx';
import WidgetContact from 'scripts/components/widgets/WidgetContact.jsx';
import WidgetConcept from 'scripts/components/widgets/WidgetConcept.jsx';
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
            <WidgetTeam />, <WidgetConcept />, <WidgetContact />, <WidgetRooms />,
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
      <Router history={browserHistory}>
        <Route path="/" component={Content}>
          <Route path="/concept" component={ModalConcept} />
          <Route path="/contact" component={ModalContact} />
          <Route path="/physioinfos" component={ModalPhysioInfos} />
          <Route path="/physiooffer" component={ModalPhysioOffer} />
          <Route path="/rooms" component={ModalRooms} />
          <Route path="/team" component={ModalTeam} />
          <Route path="*" component={null}/>
        </Route>
      </Router>
    );
  }
}
