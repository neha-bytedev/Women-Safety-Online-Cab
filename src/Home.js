import React, { useEffect, useState } from "react";
import './Home.css'; // Import the CSS file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const Home = () => {
  const [text, setText] = useState("");
  const fullText = `"We believe every woman deserves a safe, comfortable, and worry-free journey. Our advanced safety features and real-time tracking ensure that you reach your destination securely, every time."`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, []);

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

      <div className="sec1-2">
        <div className="con-box">
          <div className="left">
            <div className="left-con-box">
              <div className="left1">
                <div id="heading"><h1>Ride Safe Ride Smart</h1></div>
                <div id="circle"></div>
              </div>
              <div className="left2">
                <div id="para">
                  <p className="animated-text">"We believe every woman deserves a safe, comfortable, and worry-free journey. Our advanced safety features and real-time tracking ensure that you reach your destination securely, every time."</p>
                </div>
              </div>
              <div className="left3">
                <div><Link to="/bookcabform" className="book-btn">Book Now</Link></div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="Frame 2.png" alt="Ride Image"/>
          </div>
        </div>
      </div>
      <div className="sec2">
        <div className="sec2-1">
          <div className="sec2-1-heading">More About Us</div>
          <div className="sec2-1-con">
            <div className="sec2-1-con-left">
              <div className="img-con"><img src="https://ihfhdrlvy4.ufs.sh/f/Am0vYXt7M4VAiQE0p2V0yRL7eUITpO8EjGuA9tgQvzqoMSCN" alt="Logo"/></div>
            </div>
            <div className="sec2-1-con-right">
              <div className="sec2-1-right-info-box">
              <div className="h1">Liv Trackinh Recording</div>
              <div className="para-box">
                <div className="para">Track your ride from pickup to destination in real time.
Share your live location with trusted contacts for added security.
Receive instant updates on the driver’s details and estimated arrival time.</div>
            </div>
              </div>
              </div>
          </div>
          <div className="sec2-1-con reverse-order">
            <div className="sec2-1-con-left">
              <div className="img-con logo"><img src="https://ihfhdrlvy4.ufs.sh/f/Am0vYXt7M4VAYSepa1L1L0qrZedDymJIM7hPRObN4WzgjlFK" alt="Logo"/></div>
            </div>
            <div className="sec2-1-con-right">
              <div className="sec2-1-right-info-box">
              <div className="h1">AI -Powered Safety Alerts</div>
              <div className="para-box">
                <div className="para">Geo-Fencing: Alerts if the driver deviates from the planned route.
Speed Monitoring: Ensures the vehicle follows safe speed limits.
SOS Emergency Button: Immediate response in case of danger.</div>
            </div>
              </div>
              </div>
          </div>
          <div className="sec2-1-con">
            <div className="sec2-1-con-left">
              <div className="img-con logo1"><img src="https://ihfhdrlvy4.ufs.sh/f/Am0vYXt7M4VAGx4VviNSEojyiwnXgqxzVPBhFsM8vZRfNJkd" alt="Logo"/></div>
            </div>
            <div className="sec2-1-con-right">
              <div className="sec2-1-right-info-box">
              <div className="h1">24/7 Support & Assistance</div>
              <div className="para-box">
                <div className="para">Our safety team monitors all rides for unusual activity.
Emergency response teams are available for quick assistance.</div>
            </div>
              </div>
              </div>
          </div>
          
        </div>
        
      </div>
      <section className="why-choose-us">
      <h2 className="section-title">
        So, why choose <span className="highlight">us?</span>
      </h2>
      <div className="features-container">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <h3>Fair prices</h3>
          <p>Choose the best offer at your price</p>
        </div>
        <div className="feature-card">
          <div className="icon-circle">
            <i className="fa-regular fa-id-card"></i>
          </div>
          <h3>Verified drivers</h3>
          <p>Choose your driver based on their rating, reviews, and car</p>
        </div>
        <div className="feature-card">
          <div className="icon-circle">
            <i className="fa-regular fa-user-group"></i>
          </div>
          <h3>Door-to-door service</h3>
          <p>You can be picked up and dropped off directly at your desired location</p>
        </div>
      </div>
    </section>
    <div className="safety-container">
      <div className="safety-left">
        <h1>
          We care about <span className="highlight">safety</span>
        </h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4259/4259845.png"
          alt="Safe Ride"
          className="safety-image"
        />
      </div>
      <div className="safety-right">
        <div className="safety-feature">
          <h3>Rating system</h3>
          <p>
            We ask users to give us their honest feedback after each ride. You can choose your driver based on the experience of previous riders.
          </p>
        </div>
        <div className="safety-feature">
          <h3>Mandatory checks</h3>
          <p>
            All drivers must pass a background check before driving with inDrive.
          </p>
        </div>
        <div className="safety-feature">
          <h3>Safety button</h3>
          <p>
            Tap it to quickly contact the police or emergency services.
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

export default Home;
