import React from 'react';
import BreedCard from './BreedCard';

const SearchResults = ({ breeds }) => {
  return (
    <div className="search-results">
      {breeds.map((breed) => (
        <BreedCard
          key={breed.id}
          name={breed.name}
          image={breed.image}
          temperament={breed.temperament}
        />
      ))}
    </div>
  );
};

export default SearchResults;
