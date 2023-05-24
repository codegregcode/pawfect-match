import React from "react";
import "../../styles/questionnaire.css";

const Training = ({ onClick }) => {
  return (
    <label htmlFor="training">
      <h3>What level of training will you give them?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("basic")}
        >
          Basic
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("advanced")}
        >
          Advanced
        </button>
      </div>
    </label>
  );
};

export default Training;
