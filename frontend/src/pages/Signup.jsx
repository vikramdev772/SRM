import React, { useState } from "react";
import "../style/Signup.css";

function Signup() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-page">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>
          Join the future of beautiful experiences.
        </p>

        <input type="text" placeholder="Username" />

        <input type="email" placeholder="Email" />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <button className="signup-submit">
          Signup
        </button>

        <p className="switch-auth">
            Already have an account?
            <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Signup;