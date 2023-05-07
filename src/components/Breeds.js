import React from "react";

const Breeds = ({ dogData }) => {
  return (
    <div>
      <h2>Results:</h2>
      {dogData.map((dog) => (
        <div key={dog.name}>
          <h3>{dog.name}</h3>
          <img src={dog.image_link} alt={dog.name} />
          <p>Shedding: {dog.shedding}</p>
          <p>Barking: {dog.barking}</p>
          <p>Energy: {dog.energy}</p>
          <p>Good With Children: {dog.good_with_children}</p>
          <p>Max Size: {dog.max_height_male} &quot;</p>
        </div>
      ))}
    </div>
  );
};

export default Breeds;
