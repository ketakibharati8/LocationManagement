// src/components/Map.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ setAddress }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const handleMapClick = (event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    // Fetch address using lat and lng
    setAddress('Fetched Address Here');
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        center={location}
        zoom={15}
        mapContainerStyle={{ height: '400px', width: '800px' }}
        onClick={handleMapClick}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
