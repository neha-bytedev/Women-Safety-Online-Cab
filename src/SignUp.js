import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";  // Close icon
import "./SignUp.css";

const SignUp = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!usernameOrEmail) {
      setError("Please enter a username or email.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      // Simulate API request (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Signing up with:", usernameOrEmail, password);
      navigate("/"); // Redirect to Home page after successful sign-up
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to close the form and navigate to the homepage
  const handleClose = () => {
    navigate("/"); // Navigate to home page when the close button is clicked
  };

  return (
    <div className="signup-box1">
      <div className="signup-left">
    <div className="signup-container">
      {/* Close Button */}
      <FaTimes className="close-button" onClick={handleClose} />

      <div className="signup-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUp}>
          <label>Email or Username:</label>
          <input
            type="text"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />

          <label>Create Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
    </div>
    <div className="signup-right"></div>
    </div>
  );
};

export default SignUp;
