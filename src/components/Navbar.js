import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <button data-testid="home-btn" className="home" type="button">
          Home
        </button>
      </Link>
      <Link to="/dashboard">
        <button data-testid="dashboard-btn" className="dashboard" type="button">
          Dashboard
        </button>
      </Link>
      <Link to="/login">
        <button data-testid="login-btn" className="navbar-button" type="submit">
          Login/SignUp!
        </button>
      </Link>
      <Link to="/">
        <button data-testid="signout-btn" type="button" onClick={logout}>
          Sign Out
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
