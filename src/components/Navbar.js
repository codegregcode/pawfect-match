import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout, auth } from "../firebase";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const useGetCurrentUser = () => {
    const u = useAuthState(auth)[0];
    return u;
  };
  const user = useGetCurrentUser();

  return (
    <div className="navbar-container">
      <img src={logo} alt="site logo" id="logo" />
      <Link to="/">
        <button data-testid="home-btn" className="home" type="button">
          Home
        </button>
      </Link>
      {user ? (
        <Link to="/dashboard">
          <button
            data-testid="dashboard-btn"
            className="dashboard"
            type="button"
          >
            Dashboard
          </button>
        </Link>
      ) : null}
      {user ? null : (
        <Link to="/login">
          <button
            data-testid="login-btn"
            className="navbar-button"
            type="submit"
          >
            Login/SignUp!
          </button>
        </Link>
      )}
      {user ? (
        <Link to="/">
          <button
            data-testid="signout-btn"
            className="navbar-button"
            type="button"
            onClick={logout}
          >
            Sign Out
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
