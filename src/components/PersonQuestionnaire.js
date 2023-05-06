/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SliderInput from "./SliderInput";

const PersonQuestionnaire = () => {
  const [trainability, setTrainability] = useState("");
  const [energy, setEnergy] = useState(3);
  const [shedding, setShedding] = useState(3);
  const [barking, setBarking] = useState(3);
  const [sizePreference, setSizePreference] = useState("");
  const [dogData, setDogData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      energy,
      trainability,
      shedding,
      barking,
    };

    const filterDogBySize = (dogs) => {
      if (sizePreference === "small") {
        const smallDogs = dogs.filter((dog) => dog.max_height_male <= 20);
        console.log("Filtered small dogs", smallDogs);
        return smallDogs;
      }
      if (sizePreference === "medium") {
        return dogs.filter(
          (dog) => dog.max_height_male > 20 && dog.max_height_male < 30
        );
      }
      if (sizePreference === "large") {
        return dogs.filter((dog) => dog.max_height_male > 30);
      }
      return dogs;
    };

    axios
      .get("https://api.api-ninjas.com/v1/dogs", {
        params,
        headers: { "X-Api-Key": "jdp3FIXDk65mSaJwovRCXg==fgQngpm9S336hgoo" },
      })
      .then((response) => {
        console.log(response.data);
        const filteredDogs = filterDogBySize(response.data);
        setDogData(filteredDogs);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Sorry no dogs match your critera!");
      });
  };

  const handleSizePreferenceChange = (event) => {
    setSizePreference(event.target.value);
  };

  return (
    <>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="energy">
          How much daily exercise will your dog get?
          <SliderInput
            value={energy}
            onChange={setEnergy}
            labelText1=" Indoor play only "
            labelText2=" Regular long walks and hikes! "
          />
        </label>
        <label htmlFor="training">
          Training?
          <SliderInput value={trainability} onChange={setTrainability} />
        </label>
        <label htmlFor="shedding">
          How do you feel about shedding?
          <SliderInput
            value={shedding}
            onChange={setShedding}
            labelText1=" I don't want a lot of shedding "
            labelText2=" Shedding doesn't bother me! "
          />
        </label>
        <label htmlFor="barking">
          How do you feel about Barking
          <SliderInput
            value={barking}
            onChange={setBarking}
            labelText1=" I don't like a lot of barking "
            labelText2=" I don't mind barking! "
          />
        </label>
        <label htmlFor="sizePreference">
          What is your size preference?
          <select id="sizePreference" onChange={handleSizePreferenceChange}>
            <option value="">Select a size preference</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      {dogData && dogData.length > 0 ? (
        <div>
          <h2>Results:</h2>
          {dogData.map((dog) => (
            <div key={dog.name}>
              <h3>{dog.name}</h3>
              <img src={dog.image_link} alt={dog.name} />
              <p>Energy: {dog.energy}</p>
              <p>Training: {dog.trainability}</p>
              <p>Shedding: {dog.shedding}</p>
              <p>Barking: {dog.barking}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Sorry no dogs match your critera!</p>
        </div>
      )}
    </>
  );
};

export default PersonQuestionnaire;
