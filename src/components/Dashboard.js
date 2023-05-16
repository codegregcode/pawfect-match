import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db, getFaves } from "../firebase";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";

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
      {favourites}
    </div>
  );
};

export default Dashboard;
