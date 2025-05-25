import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";  // Importing cross icon
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      setLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      // Simulate API request (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Logging in with:", email, password);
      navigate("/"); // Navigate to home page
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to close the login form and navigate to the homepage
  const handleClose = () => {
    navigate("/");  // Navigate to home page when the close button is clicked
  };

  return (
    <div className="login-box1">
      <div className="login-left">
    <div className="login-container">
      {/* Close Button */}
      <FaTimes className="close-button" onClick={handleClose} />

      <div className="login-box">
        <h2>Login to Saarthi</h2>
        <form onSubmit={handleLogin} className="fm">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="forgot"><Link to ="/forgotpass">Forgot Password</Link></div>
      </div>
    </div>
    </div>
    <div className="login-right"></div>
    </div>
  );
};

export default Login;
