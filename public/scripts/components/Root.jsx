import React from 'react';
import Board from 'scripts/components/Board.jsx';

import Bar from 'scripts/components/bars/Bar.jsx';
import CompanyBar from 'scripts/components/bars/CompanyBar.jsx';

import Widget from 'scripts/components/widgets/Widget.jsx';
import TeamWidget from 'scripts/components/widgets/TeamWidget.jsx';

import Modal from 'scripts/components/modals/Modal.jsx';
import TeamModal from 'scripts/components/modals/TeamModal.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <CompanyBar />
        <Board
          widgets={[<TeamWidget />, <Widget />, <Widget />, <Widget />, <Widget />]}
          modals={[<TeamModal />, <Modal />, <Modal />, <Modal />, <Modal />]}
        />
        <Bar />
        <Board
          widgets={[<Widget />, <Widget />, <Widget />]}
          modals={[<Modal />, <Modal />, <Modal />]}
        />
      </div>
    );
  }
}
