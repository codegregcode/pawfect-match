/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceMeh,
  faFaceLaughBeam,
} from "@fortawesome/free-regular-svg-icons";

const SliderInput = ({ value, onChange, labelText1, labelText2 }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        {labelText1 && <span>{labelText1}</span>}
        <FontAwesomeIcon icon={faFaceMeh} />
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faFaceLaughBeam} />
        {labelText2 && <span>{labelText2}</span>}
      </label>
    </div>
  );
};

export default SliderInput;
