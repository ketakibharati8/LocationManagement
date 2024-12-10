// src/components/AddressList.js
import React from 'react';

const AddressList = ({ address }) => {
  return (
    <div>
      <h3>Saved Addresses</h3>
      <ul>
        {/* Render saved addresses here */}
        {address && <li>{address}</li>}
      </ul>
    </div>
  );
};

export default AddressList;
