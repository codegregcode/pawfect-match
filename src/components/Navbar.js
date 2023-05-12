import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/login-signup">
        <button className="navbar-button" type="submit">
          Login/SignUp!
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
