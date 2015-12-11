/* global google */

import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  static propTypes = {
    address: React.PropTypes.string.isRequired
  }
  componentDidMount() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.props.address}, (results) => {
      const location = results[0].geometry.location;
      this._map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
        center: location, // Switzerland coordinates
        zoom: 15
      });
      new google.maps.Marker({
        map: this._map,
        position: location,
        title: 'Physio Balance GmbH'
      });
    });
  }
  render() {
    return (
      <div className="googlemap" ref="map"></div>
    );
  }
}
