/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const Energy = ({ onNextQuestion, onClick }) => {
  return (
    <label>
      Will you and your pup have an active lifestyle?
      <div>
        <button type="button" onClick={() => onClick(2)}>
          Occasional walks
        </button>
        <button type="button" onClick={() => onClick(3)}>
          We will go on regular short walks but we&apos;re pretty chilled!
        </button>
        <button type="button" onClick={() => onClick(4)}>
          We will go on occasional long walks with lots of play!
        </button>
        <button type="button" onClick={() => onClick(5)}>
          We will go on loads of long walks, hikes and jogs!
        </button>
      </div>
      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </label>
  );
};

export default Energy;
