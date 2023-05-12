import React from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1>Pawfect Match!</h1>
        <h2>Find your Paw Pal</h2>
        <p>
          <br />
          <Link to="questionnaire">Click here to start your search!</Link>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
