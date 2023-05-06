import React from "react";

const BreedCard = ({ name, image, temperament }) => {
  return (
    <div className="breed-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{temperament}</p>
    </div>
  );
};

export default BreedCard;
