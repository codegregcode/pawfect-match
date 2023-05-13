import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
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
