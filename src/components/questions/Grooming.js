import React from "react";

const Grooming = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="grooming">
      How much time can you spend grooming your dog?
      <div>
        <button type="button" onClick={() => onClick("small")}>
          Just the occasional brush
        </button>
        <button type="button" onClick={() => onClick("medium")}>
          I&apos;m happy to groom them a couple of times a week
        </button>
        <button type="button" onClick={() => onClick("high")}>
          I&apos;m happy to groom them every day!
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Grooming;
