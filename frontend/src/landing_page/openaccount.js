import React from "react";
import { Link } from "react-router-dom";

function Openaccount() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h1 className="mt-2">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup">
          <button
            className="mt-3 p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Openaccount;
