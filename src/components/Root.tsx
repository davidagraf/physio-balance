import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Board from './Board.jsx';

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

function Content({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <BarCompany />
      {children}
      <Footer />
    </div>
  );
}

function BoardContent({ children }: { children?: React.ReactNode }) {
  return (
    <Content>
      {children}
      <Board
        widgets={[
          <WidgetTeam />, <WidgetConcept />, <WidgetContact/>, <WidgetRooms />,
          <WidgetPhysioOffer />, <WidgetPhysioInfos />
        ]}
      />
    </Content>
  );
}

export default function Root() {
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
