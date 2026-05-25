import React, { useState } from "react";
import "../style/Login.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>
          Sign in to continue your experience.
        </p>

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

        <button className="login-submit">
          Login
        </button>

        <p className="switch-auth">
            Don’t have an account?
            <a href="/signup"> Signup</a>
        </p>

      </div>

    </div>
  );
}

export default Login;