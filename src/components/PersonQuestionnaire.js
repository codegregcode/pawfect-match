/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import dogFilter from "../utilities/dogFilter";
import Breeds from "./Breeds";

const PersonQuestionnaire = () => {
  const [energy, setEnergy] = useState(0);
  const [outdoorSpace, setOutdoorSpace] = useState("");
  const [children, setChildren] = useState("");
  const [dogData, setDogData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      energy,
    };

    axios
      .get("https://api.api-ninjas.com/v1/dogs", {
        params,
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      })
      .then((response) => {
        console.log(response.data);
        const filteredDogs = dogFilter(response.data, outdoorSpace, children);
        console.log("filteredDogs", filteredDogs);
        setDogData(filteredDogs);
        if (filteredDogs.length === 0) {
          toast.error("Sorry no dogs match your critera!");
        } else {
          toast.success("Dogs successfully fetched!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error fetching dogs. Please try again later.");
      });
  };

  const handleOutdoorSpaceChange = (event) => {
    setOutdoorSpace(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const handleLowActivityClick = () => {
    setEnergy(2);
  };

  const handleAverageActivityClick = () => {
    setEnergy(3);
  };

  const handleHighActivityClick = () => {
    setEnergy(4);
  };

  const handleUltraActiveClick = () => {
    setEnergy(5);
  };

  return (
    <>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Will you and your pup have an active lifestyle?
          <div>
            <button type="button" onClick={handleLowActivityClick}>
              Occasional walks
            </button>
            <button type="button" onClick={handleAverageActivityClick}>
              We will go on regular short walks but we&apos;re pretty chilled!
            </button>
            <button type="button" onClick={handleHighActivityClick}>
              We will go on occasional long walks with lots of play!
            </button>
            <button type="button" onClick={handleUltraActiveClick}>
              We will go on loads of long walks, hikes and jogs!
            </button>
          </div>
        </label>
        <label htmlFor="outdoorSpace">
          How much outdoor space do you have?
          <select id="outdoorSpace" onChange={handleOutdoorSpaceChange}>
            <option value="">Please select an option</option>
            <option value="none">I have no outdoor space</option>
            <option value="medium">I have a small garden</option>
            <option value="large">I have a large garden</option>
          </select>
        </label>
        <label htmlFor="children">
          Do you have Children?
          <select id="children" onChange={handleChildrenChange}>
            <option value="">Please select an option</option>
            <option value="no">No</option>
            <option value="maybe">Maybe one day.</option>
            <option value="yesOver12">Yes, over 12 years old</option>
            <option value="yesUnder12">Yes, under 12 years old</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      {dogData && dogData.length > 0 ? (
        <Breeds dogData={dogData} />
      ) : (
        <div>
          <p>Sorry no dogs match your critera!</p>
        </div>
      )}
    </>
  );
};

export default PersonQuestionnaire;
