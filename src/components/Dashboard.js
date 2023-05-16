import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db, getFaves } from "../firebase";

const Dashboard = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const faves = await getFaves();
      setFavourites(faves);
    };

    fetchFavourites();
  }, []);

  return (
    <div className="breeds-container">
      <h2>My fave pups ❤️:</h2>
      {favourites.map((favourite) => (
        <div key={favourite.breed}>{favourite.breed}</div>
      ))}
    </div>
  );
};

export default Dashboard;
