import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import formular from 'documents/VERORDNUNG_ZUR_PHYSIOTHERAPIE_MB.docx'

export default class extends React.Component {
  render() {
    return (
      <Widget
        uri={formular}
        text={'verordnungsformular'} />
    );
  }
}
