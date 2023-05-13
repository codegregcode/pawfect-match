/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/login-signup.css";
import { auth } from "../firebase";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="loginsignup-container">
      <h2>Login/Signup!</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="btn-login" type="button" onClick={handleSignup}>
          Sign up
        </button>
        <button className="btn-login" type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
