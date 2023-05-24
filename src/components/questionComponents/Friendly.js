import React from "react";
import "../../styles/questionnaire.css";

const Friendly = ({ onClick }) => {
  return (
    <label htmlFor="friendliness">
      <h3>How friendly should they be?</h3>
      <div className="container">
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("any")}
        >
          I don&apos;t mind!
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("wary")}
        >
          They need to be wary of strangers
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("mostly")}
        >
          Friendly with people they know!
        </button>
        <button
          type="button"
          className="btn-question"
          onClick={() => onClick("very")}
        >
          Friendly with everyone!
        </button>
      </div>
    </label>
  );
};

export default Friendly;
