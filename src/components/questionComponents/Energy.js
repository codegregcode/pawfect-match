import React from "react";
import "../../styles/questionnaire.css";

const Energy = ({ onClick }) => {
  return (
    <label htmlFor="energy">
      <h3>Will you and your pup have an active lifestyle?</h3>
      <div className="container">
        <button
          className="btn-question"
          type="button"
          onClick={() => onClick(2)}
        >
          A short walk or playing in the garden
        </button>
        <button
          className="btn-question"
          type="button"
          onClick={() => onClick(3)}
        >
          Average walks and lots of playtime
        </button>
        <button
          className="btn-question"
          type="button"
          onClick={() => onClick(4)}
        >
          A mix of average and long walks
        </button>
        <button
          className="btn-question"
          type="button"
          onClick={() => onClick(5)}
        >
          We will go on loads of long walks, hikes and jogs!
        </button>
      </div>
    </label>
  );
};

export default Energy;
