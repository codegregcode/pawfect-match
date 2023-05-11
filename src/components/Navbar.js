import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* this h3 elem could be replaced with a logo */}
      <h1 className="navbar-title">Pawfect Match!</h1>
      <Link to="/login-signup">
        <button className="navbar-button" type="submit">
          Login/SignUp!
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
