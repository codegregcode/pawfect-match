import React from "react";

const Barking = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="barking">
      Does barking bother you?
      <div>
        <button type="button" onClick={() => onClick("small")}>
          I don&apos;t want a dog that barks a lot
        </button>
        <button type="button" onClick={() => onClick("medium")}>
          A little barking is ok
        </button>
        <button type="button" onClick={() => onClick("high")}>
          I don&apos;t mind how much they bark
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Barking;
