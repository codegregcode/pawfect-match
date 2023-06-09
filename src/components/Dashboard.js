import React, { useEffect, useState } from "react";
import { getFaves } from "../firebase";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await getFaves();
      setFavorites(favoritesData);
    };

    fetchFavorites();
  });

  return (
    <div className="fave-breeds-container">
      <h2>Dashboard</h2>
      <div className="fav-breed-cards">
        <ul>
          {favorites.map((breed) => (
            <div key={breed.breed.name} className="fav-breed-card">
              <img src={breed.breed.image_link} alt={breed.breed.name} />
              <h3>{breed.breed.name}</h3>
              <div className="fav-breed-details">
                <p>Energy: {breed.breed.energy}</p>
                <p>Grooming: {breed.breed.grooming}</p>
                <p>Shedding: {breed.breed.shedding}</p>
                <p>Barking: {breed.breed.barking}</p>
                <p>Easy to train: {breed.breed.trainability}</p>
                <p>
                  Good With Children: {breed.breed.good_with_other_children}
                </p>
                <p>Good With Other Dogs: {breed.breed.good_with_other_dogs}</p>
                <p>Good With Strangers: {breed.breed.good_with_strangers}</p>
                <p>Max Size: {breed.breed.max_height_male}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
