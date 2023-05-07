/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import dogFilter from "../utilities/dogFilter";
import Breeds from "./Breeds";

const PersonQuestionnaire = () => {
  const [energy, setEnergy] = useState(0);
  const [outdoorSpace, setOutdoorSpace] = useState("");
  const [indoorSpace, setIndoorSpace] = useState("");
  const [children, setChildren] = useState("");
  const [otherDogs, setOtherDogs] = useState("");
  const [training, setTraining] = useState("");
  const [friendliness, setFriendliness] = useState("");
  const [grooming, setGrooming] = useState("");
  const [shedding, setShedding] = useState("");
  const [barking, setBarking] = useState("");
  const [drooling, setDrooling] = useState("");
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
        // eslint-disable-next-line no-console
        console.log(response.data);
        const filteredDogs = dogFilter(
          response.data,
          outdoorSpace,
          indoorSpace,
          children,
          otherDogs,
          training,
          friendliness,
          grooming,
          shedding,
          barking,
          drooling
        );
        setDogData(filteredDogs);
        if (filteredDogs.length === 0) {
          toast.error("Sorry no dogs match your critera!");
        } else {
          toast.success("Dogs successfully fetched!");
          // eslint-disable-next-line no-console
          console.log(filteredDogs, "filtereddogs");
        }
      })
      .catch(() => {
        toast.error("Error fetching dogs. Please try again later.");
      });
  };

  const handleEnergyClick = (energyLevel) => {
    setEnergy(energyLevel);
  };

  const handleOutdoorSpaceClick = (value) => {
    setOutdoorSpace(value);
  };

  const handleIndoorSpaceClick = (value) => {
    setIndoorSpace(value);
  };

  const handleChildrenClick = (value) => {
    setChildren(value);
  };

  const handleOtherDogsClick = (value) => {
    setOtherDogs(value);
  };

  const handleTrainingClick = (value) => {
    setTraining(value);
  };

  const handleFriendlinessClick = (value) => {
    setFriendliness(value);
  };

  const handleGroomingClick = (value) => {
    setGrooming(value);
  };

  const handleSheddingClick = (value) => {
    setShedding(value);
  };

  const handleBarkingClick = (value) => {
    setBarking(value);
  };

  const handleDroolingClick = (value) => {
    setDrooling(value);
  };

  return (
    <>
      <h1>Pawfect Match!</h1>
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
        <label htmlFor="indoorSpace">
          How much indoor space do you have?
          <div>
            <button
              type="button"
              onClick={() => handleIndoorSpaceClick("small")}
            >
              I live in a small apartment
            </button>
            <button
              type="button"
              onClick={() => handleIndoorSpaceClick("medium")}
            >
              I have a house or large apartment
            </button>
            <button
              type="button"
              onClick={() => handleIndoorSpaceClick("large")}
            >
              I have a large house
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
        <label htmlFor="otherDogs">
          How much training will you give your dog?
          <div>
            <button type="button" onClick={() => handleTrainingClick("basic")}>
              Basic
            </button>
            <button
              type="button"
              onClick={() => handleTrainingClick("advanced")}
            >
              Advanced
            </button>
          </div>
        </label>
        <label htmlFor="friendliness">
          How friendly should they be?
          <div>
            <button
              type="button"
              onClick={() => handleFriendlinessClick("any")}
            >
              I don&apos;t mind!
            </button>
            <button
              type="button"
              onClick={() => handleFriendlinessClick("wary")}
            >
              They need to be wary of strangers
            </button>
            <button
              type="button"
              onClick={() => handleFriendlinessClick("mostly")}
            >
              Friendly with people they know!
            </button>
            <button
              type="button"
              onClick={() => handleFriendlinessClick("very")}
            >
              Friendly with everyone!
            </button>
          </div>
        </label>
        <label htmlFor="grooming">
          How much time can you spend grooming your dog?
          <div>
            <button type="button" onClick={() => handleGroomingClick("small")}>
              Just the occasional brush
            </button>
            <button type="button" onClick={() => handleGroomingClick("medium")}>
              I&apos;m happy to groom them a couple of times a week
            </button>
            <button type="button" onClick={() => handleGroomingClick("high")}>
              I&apos;m happy to groom them every day!
            </button>
          </div>
        </label>
        <label htmlFor="shedding">
          Does shedding bother you?
          <div>
            <button type="button" onClick={() => handleSheddingClick("small")}>
              I don&apos;t want a dog that sheds a lot
            </button>
            <button type="button" onClick={() => handleSheddingClick("medium")}>
              A little shedding is ok
            </button>
            <button type="button" onClick={() => handleSheddingClick("high")}>
              I don&apos;t mind how much they shed
            </button>
          </div>
        </label>
        <label htmlFor="barking">
          Does barking bother you?
          <div>
            <button type="button" onClick={() => handleBarkingClick("small")}>
              I don&apos;t want a dog that barks a lot
            </button>
            <button type="button" onClick={() => handleBarkingClick("medium")}>
              A little barking is ok
            </button>
            <button type="button" onClick={() => handleBarkingClick("high")}>
              I don&apos;t mind how much they bark
            </button>
          </div>
        </label>
        <label htmlFor="drooling">
          Does drooling bother you?
          <div>
            <button type="button" onClick={() => handleDroolingClick("small")}>
              I don&apos;t want a dog that drools a lot
            </button>
            <button type="button" onClick={() => handleDroolingClick("medium")}>
              A little drool is ok
            </button>
            <button type="button" onClick={() => handleDroolingClick("high")}>
              I don&apos;t mind how much they drool
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
