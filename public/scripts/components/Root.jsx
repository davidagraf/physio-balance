import React from 'react';
import TitleBar from 'scripts/components/TitleBar.jsx';
import Board from 'scripts/components/Board.jsx';
import Widget from 'scripts/components/Widget.jsx';
import Modal from 'scripts/components/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Board
          widgets={[<Widget />, <Widget />, <Widget />, <Widget />, <Widget />]}
          modals={[<Modal />, <Modal />, <Modal />, <Modal />, <Modal />]}
        />
        <TitleBar />
        <Board
          widgets={[<Widget />, <Widget />, <Widget />]}
          modals={[<Modal />, <Modal />, <Modal />]}
        />
      </div>
    );
  }
}
