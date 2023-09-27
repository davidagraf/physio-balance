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
import DataProtection from './DataProtection.jsx';

class Content extends React.Component {
  render() {
    return (
      <div>
        <BarCompany />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node
}

class BoardContent extends React.Component {
  render() {
    return (
      <Content>
        {this.props.children}
        <Board
          widgets={[
            <WidgetTeam />, <WidgetConcept />, <WidgetContact/>, <WidgetRooms />,
            <WidgetPhysioOffer />, <WidgetPhysioInfos />
          ]}
        />
      </Content>
    );
  }
}

BoardContent.propTypes = {
  children: PropTypes.node
}

export default class extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/concept" element={<BoardContent><ModalConcept/></BoardContent>} />
          <Route path="/contact" element={<BoardContent><ModalContact/></BoardContent>} />
          <Route path="/physioinfos" element={<BoardContent><ModalPhysioInfos/></BoardContent>} />
          <Route path="/physiooffer" element={<BoardContent><ModalPhysioOffer/></BoardContent>} />
          <Route path="/rooms" element={<BoardContent><ModalRooms/></BoardContent>} />
          <Route path="/team" element={<BoardContent><ModalTeam/></BoardContent>} />
          <Route path="/data-protection" element={<Content><DataProtection/></Content>}/>
          <Route path="*" element={<BoardContent/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
