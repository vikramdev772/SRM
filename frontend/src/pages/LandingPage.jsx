import React from "react";
import "../style/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-container">

      {/* LEFT CONTENT */}

      <div className="landing-content">

        <h1>
          Think <span>Different.</span>
        </h1>

        <p>
          Experience premium design, futuristic interactions
          and beautifully crafted frontend experiences.
        </p>

        <div className="landing-buttons">

          <Link to="/login">
            <button className="landing-btn">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="landing-btn signup-btn">
              Signup
            </button>
          </Link>

        </div>

      </div>

      {/* MACBOOK */}

      <div className="macbook">

        <div className="inner">

          <div className="screen">

            <div className="face-one">

              <div className="camera" />

              <div className="display">
                <div className="shade" />
              </div>

              <span>MacBook Pro</span>

            </div>

          </div>

          <div className="macbody">

            <div className="face-one">

              <div className="touchpad"></div>

              <div className="keyboard">

                {Array.from({ length: 120 }).map((_, index) => (
                  <div key={index} className="key" />
                ))}

              </div>

            </div>

            <div className="pad one" />
            <div className="pad two" />
            <div className="pad three" />
            <div className="pad four" />

          </div>

        </div>

        <div className="shadow" />

      </div>

    </div>
  );
}

export default LandingPage;