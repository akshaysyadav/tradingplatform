import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary-container">
      {/* User Greeting */}
      <div className="summary-card user-card">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* Equity Section */}
      <div className="summary-card section-card">
        <div className="section-title">Equity</div>
        <div className="section-data">
          <div className="left">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <div className="right">
            <p>Margins used <span>0</span></p>
            <p>Opening balance <span>3.74k</span></p>
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="summary-card section-card">
        <div className="section-title">Holdings (13)</div>
        <div className="section-data">
          <div className="left">
            <h3>
              1.55k <small className="profit">+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <div className="right">
            <p>Current Value <span>31.43k</span></p>
            <p>Investment <span>29.88k</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
