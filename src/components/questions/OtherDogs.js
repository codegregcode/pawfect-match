import React from "react";

const OtherDogs = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="otherDogs">
      Do you have other dogs?
      <div>
        <button type="button" onClick={() => onClick("no")}>
          No
        </button>
        <button type="button" onClick={() => onClick("maybe")}>
          No, but maybe one day
        </button>
        <button type="button" onClick={() => onClick("yes")}>
          Yes, I own other dogs
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default OtherDogs;
