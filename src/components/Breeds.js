import React from "react";

const Breeds = ({ dogData }) => {
  return (
    <div>
      <h2>Results:</h2>
      {dogData.map((dog) => (
        <div key={dog.name}>
          <h3>{dog.name}</h3>
          <img src={dog.image_link} alt={dog.name} />
          <p>Energy: {dog.energy}</p>
          <p>Grooming: {dog.grooming}</p>
          <p>Shedding: {dog.shedding}</p>
          <p>Barking: {dog.barking}</p>
          <p>Easy to Train: {dog.trainability}</p>
          <p>Good With Children: {dog.good_with_children}</p>
          <p>Good With Other Dogs: {dog.good_with_other_dogs}</p>
          <p>Good With Strangers: {dog.good_with_strangers}</p>
          <p>Max Size: {dog.max_height_male} &quot;</p>
        </div>
      ))}
    </div>
  );
};

export default Breeds;
