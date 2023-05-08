import React from "react";

const Children = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="children">
      Do you have children?
      <div>
        <button type="button" onClick={() => onClick("no")}>
          No
        </button>
        <button type="button" onClick={() => onClick("maybe")}>
          No, but maybe one day
        </button>
        <button type="button" onClick={() => onClick("YesOver12")}>
          Yes, over 12 years old
        </button>
        <button type="button" onClick={() => onClick("YesUnder12")}>
          Yes, under 12 years old
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Children;
