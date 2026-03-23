/* global google */

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
}

export default function GoogleMap({ address }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results) => {
      if (!results || results.length === 0 || !mapRef.current) return;
      
      const location = results[0].geometry.location;
      mapInstanceRef.current = new google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15
      });
      
      new google.maps.Marker({
        map: mapInstanceRef.current,
        position: location,
        title: 'Physio Balance'
      });
    });
  }, [address]);

  return <div className="googlemap" ref={mapRef} />;
}
