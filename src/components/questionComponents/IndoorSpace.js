import React from "react";
import "../../styles/questionnaire.css";

const IndoorSpace = ({ onClick }) => {
  return (
    <label htmlFor="indoorSpace">
      <h3>How much indoor space do you have?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("small")}
        >
          I live in a small apartment
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("medium")}
        >
          I have a house or large apartment
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("large")}
        >
          I have a large house
        </button>
      </div>
    </label>
  );
};

export default IndoorSpace;
