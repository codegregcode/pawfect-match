import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Find your Paw Pal</h2>
      <p>
        Click <Link to="questionnaire">here</Link>
      </p>
    </div>
  );
};

export default Welcome;
