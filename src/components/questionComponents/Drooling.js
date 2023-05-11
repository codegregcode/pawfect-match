import React from "react";
import "../../styles/questionnaire.css";

const Drooling = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="drooling">
      <h3>Does drooling bother you?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("small")}
        >
          I don&apos;t want a dog that drools a lot
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("medium")}
        >
          A little drool is ok
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("high")}
        >
          I don&apos;t mind how much they drool
        </button>
      </div>
    </label>
  );
};

export default Drooling;
