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
  const [otherDogs, setOtherDogs] = useState("");
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
        const filteredDogs = dogFilter(
          response.data,
          outdoorSpace,
          children,
          otherDogs
        );
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

  const handleEnergyClick = (energyLevel) => {
    setEnergy(energyLevel);
  };

  const handleOutdoorSpaceClick = (value) => {
    setOutdoorSpace(value);
  };

  const handleChildrenClick = (value) => {
    setChildren(value);
  };

  const handleOtherDogsClick = (value) => {
    setOtherDogs(value);
  };

  return (
    <>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Will you and your pup have an active lifestyle?
          <div>
            <button type="button" onClick={() => handleEnergyClick(2)}>
              Occasional walks
            </button>
            <button type="button" onClick={() => handleEnergyClick(3)}>
              We will go on regular short walks but we&apos;re pretty chilled!
            </button>
            <button type="button" onClick={() => handleEnergyClick(4)}>
              We will go on occasional long walks with lots of play!
            </button>
            <button type="button" onClick={() => handleEnergyClick(5)}>
              We will go on loads of long walks, hikes and jogs!
            </button>
          </div>
        </label>
        <label htmlFor="outdoorSpace">
          How much outdoor space do you have?
          <div>
            <button
              type="button"
              onClick={() => handleOutdoorSpaceClick("none")}
            >
              I have no outdoor space
            </button>
            <button
              type="button"
              onClick={() => handleOutdoorSpaceClick("small")}
            >
              I have a small garden
            </button>
            <button
              type="button"
              onClick={() => handleOutdoorSpaceClick("large")}
            >
              I have a large garden
            </button>
          </div>
        </label>
        <label htmlFor="children">
          Do you have children?
          <div>
            <button type="button" onClick={() => handleChildrenClick("no")}>
              No
            </button>
            <button type="button" onClick={() => handleChildrenClick("maybe")}>
              No, but maybe one day
            </button>
            <button
              type="button"
              onClick={() => handleChildrenClick("YesOver12")}
            >
              Yes, over 12 years old
            </button>
            <button
              type="button"
              onClick={() => handleChildrenClick("YesUnder12")}
            >
              Yes, under 12 years old
            </button>
          </div>
        </label>
        <label htmlFor="otherDogs">
          Do you have other dogs?
          <div>
            <button type="button" onClick={() => handleOtherDogsClick("no")}>
              No
            </button>
            <button type="button" onClick={() => handleOtherDogsClick("maybe")}>
              No, but maybe one day
            </button>
            <button type="button" onClick={() => handleOtherDogsClick("yes")}>
              Yes, I own other dogs
            </button>
          </div>
        </label>
        <button type="submit">Submit</button>
      </form>
      {dogData && dogData.length > 0 && <Breeds dogData={dogData} />}
    </>
  );
};

export default PersonQuestionnaire;
