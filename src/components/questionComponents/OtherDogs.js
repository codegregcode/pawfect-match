import React from "react";
import "../../styles/questionnaire.css";

const OtherDogs = ({ onClick }) => {
  return (
    <label htmlFor="otherDogs">
      <h3>Do you have other dogs?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("no")}
        >
          No
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("maybe")}
        >
          No, but maybe one day
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("yes")}
        >
          Yes, I own other dogs
        </button>
      </div>
    </label>
  );
};

export default OtherDogs;
