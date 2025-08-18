import React, { useState } from "react";
import axios from "axios";
import "./login.css"; // Import the CSS file

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://tradingplatform-lv6u.onrender.com/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      window.location.href = "https://tradingplatform-1.onrender.com";
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="background-pattern"></div>
      <div className="login-card">
        <div className="login-header">
          <div className="icon-container">
            <div className="login-icon">👤</div>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Please sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            <span className="button-text">Sign In</span>
            <div className="button-shine"></div>
          </button>
        </form>
        
        <div className="login-footer">
          <p className="footer-text">
            Don't have an account? <a href="/signup" className="footer-link">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;