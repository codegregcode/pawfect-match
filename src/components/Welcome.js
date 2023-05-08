import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Find your Paw Pal</h2>
      <p>
        <Link to="personQuestionnaire">click here</Link>
        <br />
        <Link to="questionnaire">click here part 2</Link>
      </p>
    </div>
  );
};

export default Welcome;
