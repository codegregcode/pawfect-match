import React from "react";

const Training = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="training">
      What level of training will you give them?
      <div>
        <button type="button" onClick={() => onClick("basic")}>
          Basic
        </button>
        <button type="button" onClick={() => onClick("advanced")}>
          Advanced
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Training;
