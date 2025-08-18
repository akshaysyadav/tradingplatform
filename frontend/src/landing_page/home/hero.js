import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 text-muted">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="homehero image"
          className="mb-5"
        />
        <h1 className="mt-2 fs-3">Invest in everything</h1>
        <p className="mt-2 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button
            className="mt-3 p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
