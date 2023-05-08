import React from "react";

const Shedding = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="shedding">
      Does shedding bother you?
      <div>
        <button type="button" onClick={() => onClick("small")}>
          I don&apos;t want a dog that sheds a lot
        </button>
        <button type="button" onClick={() => onClick("medium")}>
          A little shedding is ok
        </button>
        <button type="button" onClick={() => onClick("high")}>
          I don&apos;t mind how much they shed
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Shedding;
