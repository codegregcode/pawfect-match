/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "../styles/login-signup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup-container">
      <h2>Login/Signup!</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" />
      </div>
      <div>
        <button type="button" className="btn-login">
          Sign up
        </button>
        <button type="button" className="btn-login">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
