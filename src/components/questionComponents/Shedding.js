import React from "react";
import "../../styles/questionnaire.css";

const Shedding = ({ onClick }) => {
  return (
    <label htmlFor="shedding">
      <h3>Does shedding bother you?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("small")}
        >
          I don&apos;t want a dog that sheds a lot
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("medium")}
        >
          A little shedding is ok
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("high")}
        >
          I don&apos;t mind how much they shed
        </button>
      </div>
    </label>
  );
};

export default Shedding;
