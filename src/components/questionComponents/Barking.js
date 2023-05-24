import React from "react";
import "../../styles/questionnaire.css";

const Barking = ({ onClick }) => {
  return (
    <label htmlFor="barking">
      <h3>Does barking bother you?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("small")}
        >
          I don&apos;t want a dog that barks a lot
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("medium")}
        >
          A little barking is ok
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("high")}
        >
          I don&apos;t mind how much they bark
        </button>
      </div>
    </label>
  );
};

export default Barking;
