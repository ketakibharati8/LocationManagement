// src/components/LocationModal.js
import React, { useState } from 'react';

const LocationModal = ({ onEnableLocation, onSearchManually }) => {
  return (
    <div className="modal">
      <h2>Location Permission</h2>
      <p>Please enable location to use this feature.</p>
      <button onClick={onEnableLocation}>Enable Location</button>
      <button onClick={onSearchManually}>Search Manually</button>
    </div>
  );
};

export default LocationModal;
