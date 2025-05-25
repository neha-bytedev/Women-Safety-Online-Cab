import React, { useState } from "react";
import "./ContactPage.css"; // Import the Contact Page CSS
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, message });
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-container">
      {/* Navigation Bar */}
      <div className="nav">
        <ul className="nav-left">
          <div className="logo-design">
            <img
              src="https://ihfhdrlvy4.ufs.sh/f/Am0vYXt7M4VAPAd5vQ1XtrlhoqUf6FbaxuB48VvgSdIATc7n"
              alt="Logo"
            />
          </div>
        </ul>
        <ul className="nav-middle">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/riding">Riding</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contactpage">Contact</Link></li>
        </ul>
        <ul className="nav-right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup" className="signup-button">Sign Up</Link></li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <div className="sec1-2">
        <div className="sec-inner">
          <div className="contact-box">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Message:</label>
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="img-con">
            <img
              src="https://ihfhdrlvy4.ufs.sh/f/Am0vYXt7M4VA1i8LXHd0DwSoOuGtp3aj4gscU657yJzdLlEi"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-box">
        <div className="footer">
          <div className="footer-left">
            <ul className="footer-left-con">
              <li><a href="#">Follow us</a></li>
              <li><img src="insta.png" alt="Instagram" style={{ width: "30px" }} /></li>
              <li><img src="youtube.png" alt="YouTube" style={{ width: "30px" }} /></li>
              <li><img src="facebook.png" alt="Facebook" style={{ width: "25px" }} /></li>
              <li><img src="twitter.png" alt="Twitter" style={{ width: "55px" }} /></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <ul className="footer-bottom-con">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="footer-left-con">
              <li><Link to="/book">Book us</Link></li>
              <li><Link to="/drive">Drive with us</Link></li>
              <li><Link to="/outstation">Outstation</Link></li>
              <li><Link to="/rental">Rental</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
