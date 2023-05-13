import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";

const Dashboard = () => {
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="breeds-container">
      <h2>My fave pups ❤️:</h2>
      {favourites.map((dog) => (
        <div key={dog.name} className="breed-card">
          <img src={dog.image_link} alt={dog.name} />
          <h3>{dog.name}</h3>
          <div className="breed-details">
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
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
