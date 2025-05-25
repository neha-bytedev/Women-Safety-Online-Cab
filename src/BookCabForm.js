import React, { useState } from "react";
import "./BookCabForm.css";

const BookNow = () => {
  const [tripType, setTripType] = useState("round");

  return (
    <div className="booknow-container">
      {/* Trip Type Tabs */}
      <div className="trip-tabs">
        <button 
          className={tripType === "round" ? "active" : ""}
          onClick={() => setTripType("round")}
        >
          ROUND TRIP
        </button>
        <button 
          className={tripType === "oneway" ? "active" : ""}
          onClick={() => setTripType("oneway")}
        >
          ONE WAY
        </button>
        <button 
          className={tripType === "local" ? "active" : ""}
          onClick={() => setTripType("local")}
        >
          LOCAL
        </button>
      </div>

      {/* Booking Form */}
      <div className="booking-form">
        <label>Pickup Location</label>
        <input type="text" placeholder="Enter pickup location" />

        <div className="add-stop">
          <span>+ Add Stop</span> <span className="info">?</span>
        </div>

        <label>Drop Location</label>
        <input type="text" placeholder="Enter drop location" />

        <div className="datetime-section">
          <div>
            <label>Pickup Date</label>
            <input type="date" />
          </div>
          <div>
            <label>Pickup Time</label>
            <input type="time" />
          </div>
        </div>

        <div className="datetime-section">
          <div>
            <label>Drop Date</label>
            <input type="date" />
          </div>
          <div>
            <label>Drop Time</label>
            <input type="time" />
          </div>
        </div>

        <div className="country-code">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" />
          <select>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
        </div>

        <button className="check-rates">Check Rates</button>
      </div>
    </div>
  );
};

export default BookNow;
