// src/components/LocationForm.js
import axios from 'axios';

const handleSave = () => {
  const address = { house, apartment, category };
  axios.post('http://localhost:5000/save-address', address)
    .then(response => {
      console.log('Address saved', response.data);
    })
    .catch(error => {
      console.error('Error saving address', error);
    });
};
