import React, { useState } from "react";
import "./ForgotPass.css";

const ForgotPass = () => {
  const [step, setStep] = useState(1); // Step 1: OTP | Step 2: New Password
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      setStep(2); // Move to new password step
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  const handlePasswordSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Password successfully changed!"); 
    // Here, you can send the new password to the backend for saving
  };

  return (
    <div className="forgot-container">
      {step === 1 ? (
        <div className="otp-section">
          <h2>Enter OTP</h2>
          <p>Please enter the OTP sent to your email or phone.</p>
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleOtpSubmit}>Verify OTP</button>
        </div>
      ) : (
        <div className="password-section">
          <h2>Set New Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Save Password</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPass;
