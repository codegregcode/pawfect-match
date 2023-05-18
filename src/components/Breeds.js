import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/breeds.css";
import { addToFave } from "../firebase";

const Breeds = ({ dogData }) => {
  const [faveBreeds, setFaveBreeds] = useState([]);

  const handleFaveCheck = (breed) => {
    if (!faveBreeds.includes(breed)) {
      setFaveBreeds([...faveBreeds, breed]);
      addToFave(breed);
    }
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
    focusOnSelect: true,
  };

  return (
    <div className="breeds-container">
      <h2>Results:</h2>
      <Slider {...settings}>
        {dogData.map((dog) => (
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
            <label htmlFor="fave-chk" className="fave-label">
              <input
                type="checkbox"
                className="fave-check"
                onChange={() => handleFaveCheck(dog)}
              />
              Add to favorites
            </label>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Breeds;
