import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

export default class extends React.Component {
  render() {
    return (
      <Bar
        title="Physio&shy;therapie"
        subtitle="&laquo;ihre Gesundheit ist mein Ziel&raquo;"
        className="bar--red"
      />
    );
  }
}
