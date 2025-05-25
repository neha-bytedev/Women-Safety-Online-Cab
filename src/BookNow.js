import React from "react";
import { useNavigate } from "react-router-dom";

const BookNow = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const isLoggedIn = localStorage.getItem("user"); // Check if the user is logged in

    if (isLoggedIn) {
      // If logged in, proceed with booking
      navigate("/booking-page"); // Redirect to booking page
    } else {
      // If not logged in, go to login page
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <div>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default BookNow;
