import React from "react";
import "../../styles/questionnaire.css";

const OutdoorSpace = ({ onClick }) => {
  return (
    <label htmlFor="outdoor-space">
      <h3>How much outdoor space do you have?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("none")}
        >
          I have no outdoor space
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("small")}
        >
          I have a small garden
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("large")}
        >
          I have a large garden
        </button>
      </div>
    </label>
  );
};

export default OutdoorSpace;
