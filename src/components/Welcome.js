import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Find your Paw Pal</h2>
      <p>
        <br />
        <Link to="questionnaire">Click here to start your search!</Link>
      </p>
    </div>
  );
};

export default Welcome;
