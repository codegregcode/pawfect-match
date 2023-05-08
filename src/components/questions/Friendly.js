import React from "react";

const Friendly = ({ onNextQuestion, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="friendliness">
      How friendly should they be?
      <div>
        <button type="button" onClick={() => onClick("any")}>
          I don&apos;t mind!
        </button>
        <button type="button" onClick={() => onClick("wary")}>
          They need to be wary of strangers
        </button>
        <button type="button" onClick={() => onClick("mostly")}>
          Friendly with people they know!
        </button>
        <button type="button" onClick={() => onClick("very")}>
          Friendly with everyone!
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Friendly;
