import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection } from "firebase/firestore";
import { db, getFaves } from "../firebase";

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      const favorites = await getFaves();
      console.log(favorites);
      // Perform further operations with the fetched favorites data
    };

    fetchData();
  }, []);

  return <div>Dashboard</div>;
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
