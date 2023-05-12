import React from "react";
import Breeds from "./Breeds";

const BreedResults = ({ dogData }) => {
  return (
    <div>
      <h2>Results:</h2>
      <Breeds dogData={dogData} />
    </div>
  );
};

export default BreedResults;
