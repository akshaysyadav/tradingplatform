import React from "react";
import './Summary.css';

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="card user-card">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="card section-card">
        <div className="section-title">Equity</div>
        <div className="section-content">
          <div className="section-left">
            <h3 className="amount">₹3.74k</h3>
            <p className="subtitle">Margin available</p>
          </div>

          <div className="divider-vertical"></div>

          <div className="section-right">
            <div className="info-row">
              <span>Margins used</span>
              <span className="info-value">₹0</span>
            </div>
            <div className="info-row">
              <span>Opening balance</span>
              <span className="info-value">₹3.74k</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card section-card">
        <div className="section-title">Holdings (13)</div>
        <div className="section-content">
          <div className="section-left">
            <h3 className="amount">
              ₹1.55k <small className="percent">+5.20%</small>
            </h3>
            <p className="subtitle">P&L</p>
          </div>

          <div className="divider-vertical"></div>

          <div className="section-right">
            <div className="info-row">
              <span>Current Value</span>
              <span className="info-value">₹31.43k</span>
            </div>
            <div className="info-row">
              <span>Investment</span>
              <span className="info-value">₹29.88k</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="summary-stats">
        <div className="stat-card">
          <p className="stat-title">Total Portfolio</p>
          <p className="stat-value">₹35.17k</p>
        </div>

        <div className="stat-card">
          <p className="stat-title">Return Rate</p>
          <p className="stat-value positive">+5.20%</p>
        </div>

        <div className="stat-card">
          <p className="stat-title">Active Holdings</p>
          <p className="stat-value holdings">13</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
