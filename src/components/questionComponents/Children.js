import React from "react";
import "../../styles/questionnaire.css";

const Children = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="children">
      <h3>Do you have children?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("no")}
        >
          No, never ever
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("maybe")}
        >
          No, but maybe soon...
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("YesOver12")}
        >
          Yes, over 12 years old
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("YesUnder12")}
        >
          Yes, under 12 years old
        </button>
      </div>
    </label>
  );
};

export default Children;
