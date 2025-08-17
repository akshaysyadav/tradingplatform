import React, { useState } from "react";
import axios from "axios";
import "./signup.css"; // Import the CSS file

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/auth/signup", form);
      alert("User registered successfully!");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="signup-container">
      <div className="background-pattern"></div>
      <div className="signup-card">
        <div className="signup-header">
          <div className="icon-container">
            <div className="signup-icon">👋</div>
          </div>
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">
            Join us today! Please fill in your information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label className="input-label">Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                className="signup-input"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="signup-input"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                onChange={handleChange}
                className="signup-input"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            <span className="button-text">Create Account</span>
            <div className="button-shine"></div>
          </button>
        </form>

        <div className="signup-footer">
          <p className="footer-text">
            Already have an account?{" "}
            <a href="/login" className="footer-link">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
