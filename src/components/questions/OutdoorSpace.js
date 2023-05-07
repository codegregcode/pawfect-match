import React from "react";

const OutdoorSpace = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      How much outdoor space do you have?
      <div>
        <button type="button" onClick={() => onClick("none")}>
          I have no outdoor space
        </button>
        <button type="button" onClick={() => onClick("small")}>
          I have a small garden
        </button>
        <button type="button" onClick={() => onClick("large")}>
          I have a large garden
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default OutdoorSpace;
