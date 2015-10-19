// load schedule from google docs

import jQuery from 'jquery';

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

jQuery.getJSON( SHEETS_URL, (data) => {
  let parsed = generateMatix(data.feed.entry);
  let htmlTable = jQuery('#table-schedule');

  parsed.forEach((row) => {
    let htmlRow = jQuery('<tr/>');
    for (let i = 0; i < 7; ++i) {
      let cell = row[i];
      let htmlCell = jQuery('<td>' + (cell || '') + '</td>');
      htmlRow.append(htmlCell);
    }
    htmlTable.append(htmlRow);
  });
});
