import React from "react";
import "../../styles/questionnaire.css";

const Grooming = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="grooming">
      <h3>How much time can you spend grooming your dog?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("small")}
        >
          Just the occasional brush
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("medium")}
        >
          I&apos;m happy to groom them a couple of times a week
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("high")}
        >
          I&apos;m happy to groom them every day!
        </button>
      </div>
    </label>
  );
};

export default Grooming;
