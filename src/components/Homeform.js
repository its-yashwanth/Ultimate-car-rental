import React, { useState } from 'react';
import './Homeform.css';  // Import the CSS file

const BookingForm = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Location:', location);
    console.log('Pickup Date:', pickupDate);
    console.log('Return Date:', returnDate);
  };

  return (
    <>
    <div className="formContainer">
      {/* Location Dropdown */}
      <div className="inputGroup">
        <i className="fas fa-map-marker-alt icon"></i>
        <div className="textGroup">
          <label className="label">Location</label>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)} 
            className="input"
          >
            <option value="" disabled>Select your location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
      </div>

      {/* Pickup Date Input */}
      <div className="inputGroup">
        <i className="fas fa-calendar-alt icon"></i>
        <div className="textGroup">
          <label className="label">Pickup date</label>
          <input 
            type="datetime-local" 
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)} 
            className="input"
          />
        </div>
      </div>

      {/* Return Date Input */}
      <div className="inputGroup">
        <i className="fas fa-calendar-alt icon"></i>
        <div className="textGroup">
          <label className="label">Return date</label>
          <input 
            type="datetime-local" 
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)} 
            className="input"
          />
        </div>
      </div>

      {/* Search Button */}
      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </div>
    </>
  );
};

export default BookingForm;
