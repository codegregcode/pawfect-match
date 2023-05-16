import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <button className="home" type="button">
          Home
        </button>
      </Link>
      <Link to="/dashboard">
        <button className="dashboard" type="button">
          Dashboard
        </button>
      </Link>
      <Link to="/login">
        <button className="navbar-button" type="submit">
          Login/SignUp!
        </button>
      </Link>
      <Link to="/">
        <button type="button" onClick={logout}>
          Sign Out
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
