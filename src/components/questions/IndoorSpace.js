import React from "react";

const IndoorSpace = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="indoorSpace">
      How much indoor space do you have?
      <div>
        <button type="button" onClick={() => onClick("small")}>
          I live in a small apartment
        </button>
        <button type="button" onClick={() => onClick("medium")}>
          I have a house or large apartment
        </button>
        <button type="button" onClick={() => onClick("large")}>
          I have a large house
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default IndoorSpace;
