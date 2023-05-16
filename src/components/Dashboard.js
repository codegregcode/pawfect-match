import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection } from "firebase/firestore";
import { db, getFaves } from "../firebase";

const Dashboard = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await getFaves();
      setFavorites(favoritesData);
      console.log(favoritesData);
      // Perform further operations with the fetched favorites data
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {favorites.map((breed) => (
          <div key={breed.breed.name}>
            <img src={breed.breed.image_link} alt={breed.breed.name} />
            <h3>{breed.breed.name}</h3>
            <div className="favourite-breeds">
              <p>Energy: {breed.breed.energy}</p>
              <p>Grooming: {breed.breed.grooming}</p>
              <p>Shedding: {breed.breed.shedding}</p>
              <p>Barking: {breed.breed.barking}</p>
              <p>Easy to train: {breed.breed.trainability}</p>
              <p>Good With Children: {breed.breed.good_with_other_children}</p>
              <p>Good With Other Dogs: {breed.breed.good_with_other_dogs}</p>
              <p>Good With Strangers: {breed.breed.good_with_strangers}</p>
              <p>Max Size: {breed.breed.max_height_male}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

// const Dashboard = () => {
//   const [favourites, setFavourites] = useState([]);

//   useEffect(() => {
//     const getPostsFromFirebase = [];
//     const user = getAuth();
//     const { uid } = user;

//     const favourite = db
//       .collection("Favourites")
//       .onSnapshot((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           getPostsFromFirebase.push({
//             ...doc.data(),
//             key: doc.uid,
//           });
//         });
//         setFavourites(getPostsFromFirebase);
//       });

//     return () => favourite();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Answers:</h1>
//       {favourites.length > 0 ? (
//         favourites.map((breed) => <div key={breed.name}>{breed.uid}</div>)
//       ) : (
//         <h1>no answers yet :</h1>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
