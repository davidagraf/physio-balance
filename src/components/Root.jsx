import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Board from './Board.jsx';
// import Facebook from './Facebook.jsx';

import BarCompany from './bars/BarCompany.jsx';

import WidgetTeam from './widgets/WidgetTeam.jsx';
import WidgetConcept from './widgets/WidgetConcept.jsx';
import WidgetContact from './widgets/WidgetContact.jsx';
import WidgetRooms from './widgets/WidgetRooms.jsx';

import WidgetPhysioOffer from './widgets/WidgetPhysioOffer.jsx';
import WidgetPhysioInfos from './widgets/WidgetPhysioInfos.jsx';

import ModalConcept from './modals/ModalConcept.jsx';
import ModalContact from './modals/ModalContact.jsx';
import ModalPhysioInfos from './modals/ModalPhysioInfos.jsx';
import ModalPhysioOffer from './modals/ModalPhysioOffer.jsx';
import ModalRooms from './modals/ModalRooms.jsx';
import ModalTeam from './modals/ModalTeam.jsx';

import Footer from './Footer.jsx';

class Content extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <BarCompany />
        {/*<Facebook />*/}
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
  children: PropTypes.node
}

export default class extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/concept" element={<Content><ModalConcept/></Content>} />
          <Route path="/contact" element={<Content><ModalContact/></Content>} />
          <Route path="/physioinfos" element={<Content><ModalPhysioInfos/></Content>} />
          <Route path="/physiooffer" element={<Content><ModalPhysioOffer/></Content>} />
          <Route path="/rooms" element={<Content><ModalRooms/></Content>} />
          <Route path="/team" element={<Content><ModalTeam/></Content>} />
          <Route path="*" element={<Content/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
