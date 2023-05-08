import React from "react";

const Drooling = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="drooling">
      Does drooling bother you?
      <div>
        <button type="button" onClick={() => onClick("small")}>
          I don&apos;t want a dog that drools a lot
        </button>
        <button type="button" onClick={() => onClick("medium")}>
          A little drool is ok
        </button>
        <button type="button" onClick={() => onClick("high")}>
          I don&apos;t mind how much they drool
        </button>
      </div>
    </label>
  );
};

export default Drooling;
