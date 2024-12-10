// src/App.js
import React, { useState } from 'react';
import LocationModal from './components/LocationModal';
import LocationForm from './components/LocationForm';
import AddressList from './components/AddressList';
import Map from './components/Map';

const App = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [manualSearch, setManualSearch] = useState(false);
  const [address, setAddress] = useState('');

  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationEnabled(true);
          // Fetch address using latitude and longitude
        },
        (error) => {
          console.error('Error fetching location', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSearchManually = () => {
    setManualSearch(true);
  };

  return (
    <div className="App">
      {!locationEnabled && !manualSearch && (
        <LocationModal
          onEnableLocation={handleEnableLocation}
          onSearchManually={handleSearchManually}
        />
      )}
      {locationEnabled && <LocationForm />}
      {manualSearch && <Map setAddress={setAddress} />}
      <AddressList address={address} />
    </div>
  );
};

export default App;
