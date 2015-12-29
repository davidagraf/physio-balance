import React from 'react';
import request from 'superagent';
import Modal from 'scripts/components/modals/Modal.jsx';
import Spinner from 'scripts/components/atomic/Spinner.jsx';
import Error from 'scripts/components/atomic/Error.jsx';

const SHEETS_KEY = '1dE1g755F1LoRE6cXt3BxclVPFtIN3x1uDIqM697hx5w';
const SHEET_ID = 'od6';
const SHEETS_URL = 'https://spreadsheets.google.com/feeds/cells/' + SHEETS_KEY + '/' +
                   SHEET_ID + '/public/basic?alt=json';

function generateMatix(sheetsEntries) {
  let matrix = [];
  sheetsEntries.forEach((entry) => {
    let title = entry.title.$t;
    let rowIndex = title.search(/\d/);
    let column = title.substring(0, rowIndex).charCodeAt() - 'A'.charCodeAt();
    let row = parseInt(title.substring(rowIndex)) - 1;
    let content = entry.content.$t;

    if (!matrix[row]) {
      matrix[row] = [];
    }

    matrix[row][column] = content;
  });
  return matrix;
}

export default class extends React.Component {
  state = {}
  componentDidMount() {
    request.get(SHEETS_URL).end((err, res) => {
      if (!err) {
        let parsed = generateMatix(res.body.feed.entry);
        this.setState({data: parsed});
      } else {
        this.setState({error: true});
      }
    });
  }
  render() {
    let content;

    if (this.state.data) {
      content = (
        <table>
          <thead>{
            this.state.data.slice(0, 1).map((row, i)=> {
              let rowvals = [], j;
              for (j = 0; j < 6; ++j) {
                rowvals.push(<th key={j}><div>{row[j]}</div></th>);
              }
              return <tr key={i}>{rowvals}</tr>;
            })
          }</thead>
          <tbody>{
            this.state.data.slice(1).map((row, i)=> {
              let rowvals = [], j;
              for (j = 0; j < 6; ++j) {
                rowvals.push(<td key={j}><div>{row[j]}</div></td>);
              }
              return <tr key={i}>{rowvals}</tr>;
            })
          }</tbody>
        </table>
      );
    } else if (this.state.error) {
      content = <Error />;
    } else {
      content = <Spinner />;
    }

    return (
      <Modal title="Wochenplan">{content}</Modal>
    );
  }
}
