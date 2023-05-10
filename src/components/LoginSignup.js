import React from "react";

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
        <button type="button">Sign up</button>
        <button type="button">Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;
