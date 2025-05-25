import React, { useEffect, useState } from "react";
import './Riding.css'; // Import the CSS file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const Riding = () => {
  

  return (
    <div className="sec1">
      <div className="nav">
        <ul className="nav-left">
          <div className="logo-design">
            <img src="https://ihfhdrlvy4.ufs.sh/f/Am0vYXt7M4VAPAd5vQ1XtrlhoqUf6FbaxuB48VvgSdIATc7n" alt="Logo"/>
          </div>
        </ul>
        <ul className="nav-middle">
          <li><a href="videograph.html">Home</a></li>
          <li><Link to = "/riding">Riding</Link></li>
          <li><a href="videograph-portfolio.html">Pricing</a></li>
          <li><Link to = "/contactpage">Contact</Link></li>
        </ul>
        <ul className="nav-right">
          <li><Link to = "/login">Login</Link></li>
          <li><Link to="/signup" className="signup-button">Sign Up</Link></li>
        </ul>
      </div>
      <div className="hero-container">
      <div className="hero-text">
        <p className="priority-text">Your Ride, Your Safety, Our Priority</p>
        <h1>
          Choose <span className="highlight">Safety</span>
          <br />
          Choose <span className="highlight">Saarthi.</span>
        </h1>
      </div>
      <div className="hero-image">
      <img src="image 22.png" alt="Normal Ride" />
      </div>
    </div>
    <div className="ride-booking-container">
      <h2 className="ride-title">Ride Booking</h2>
      <div className="ride-options">
        <div className="ride-card">
          <img src="image 14.png" alt="Normal Ride" />
          <h3>Normal</h3>
          <p>(Affordable & reliable rides)</p>
          <div className="learn-more">learn more</div>
        </div>
        <div className="ride-card">
          <img src="Group 6.png" alt="Women Only Ride" />
          <h3>Women-only</h3>
          <p>(Safety & comfort for women passengers)</p>
          <div className="learn-more">learn more</div>
        </div>
        <div className="ride-card">
          <img src="Group 7.png" alt="Premium Ride" />
          <h3>Premium</h3>
          <p>(Luxury & top-rated drivers)</p>
          <div className="learn-more">learn more</div>
        </div>
      </div>
    </div>
    <div className="features-container">
      <h2>Our features</h2>
      <div className="features-grid">
        <div className="feature-card purple">
          <img src="img2.png" alt="Cab Booking Guarantee" />
          <div className="feature-text">
            <h3>100% Cab Booking Guarantee</h3>
          </div>
        </div>
        <div className="feature-card blue">
          <img src="img4.png" alt="Emergency Contact Notification" />
          <div className="feature-text">
            <h3>Emergency Contact Notification for Delayed Rides</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="safe-ride-container">
      <div className="safe-ride-content">
        <img src="img1.png" alt="Safe Ride" className="ride-image" />
        <div className="ride-text">
          <h2>"Your Safe Ride, Just a Tap Away!"</h2>
          <p>
            "Get where you need to be with just a few clicks. Choose from our
            trusted drivers and enjoy a safe, comfortable ride to your
            destination."
          </p>
        </div>
      </div>
    </div>
    <div className="footer-box">
        <div className="footer">
          <div className="footer-left">
            <ul className="footer-left-con">
              <li><a href="videograph.html">Follow us</a></li>
              <li><img src="insta.png" alt="Instagram" style={{ width: '30px' }}/></li>
              <li><img src="you tube.png" alt="YouTube" style={{ width: '30px' }}/></li>
              <li><img src="facebook (2).png" alt="Facebook" style={{ width: '25px' }}/></li>
              <li><img src="twitter.png" alt="Twitter" style={{ width: '55px' }}/></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <ul className="footer-bottom-con">
              <li><a href="videograph.html">About us</a></li>
              <li><a href="videograph-about.html">Contact us</a></li>
              <li><a href="videograph-portfolio.html">Support</a></li>
              <li><a href="videograph-services.html">Careers</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="footer-left-con">
              <li><a href="videograph.html">Book us</a></li>
              <li><a href="videograph-about.html">Drive with us</a></li>
              <li><a href="videograph-portfolio.html">Outstation</a></li>
              <li><a href="videograph-services.html">Rental</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Riding;
