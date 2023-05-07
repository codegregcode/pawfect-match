import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Find your Paw Pal</h2>
      <p>
        <Link to="questionnaire">click here</Link>
      </p>
    </div>
  );
};

export default Welcome;
