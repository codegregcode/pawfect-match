/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import dogFilter from "../utilities/dogFilter";
import {
  Energy,
  OutdoorSpace,
  IndoorSpace,
  Children,
  OtherDogs,
  Training,
  Friendly,
  Grooming,
  Shedding,
  Barking,
  Drooling,
} from "./questionComponents";
import "../styles/questionnaire.css";
import Breeds from "./Breeds";

const Questionnaire = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
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
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    setAllQuestionsAnswered(
      energy !== "" &&
        outdoorSpace !== "" &&
        indoorSpace !== "" &&
        children !== "" &&
        otherDogs !== "" &&
        training !== "" &&
        friendliness !== "" &&
        grooming !== "" &&
        shedding !== "" &&
        barking !== "" &&
        drooling !== ""
    );
  }, [
    energy,
    outdoorSpace,
    indoorSpace,
    children,
    otherDogs,
    training,
    friendliness,
    grooming,
    shedding,
    barking,
    drooling,
  ]);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!allQuestionsAnswered) {
      toast.error("Please answer all questions.");
      return;
    }
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
        console.log("filtered dogs", filteredDogs);
        if (filteredDogs.length === 0) {
          toast.error("Sorry no dogs match your critera!");
        } else {
          toast.success("Dogs successfully fetched!");
        }
      })
      .catch(() => {
        toast.error("Error fetching dogs. Please try again later.");
      });
  };

  const handleNextQuestion = () => {
    setActiveQuestion(activeQuestion + 1);
  };

  const handlePrevious = () => {
    setActiveQuestion(activeQuestion - 1);
  };

  const handleEnergyClick = (energyLevel) => {
    console.log("Energy level clicked:", energyLevel);
    setEnergy(energyLevel);
  };

  const handleOutdoorSpaceClick = (value) => {
    console.log("outdoor clicked:", value);
    setOutdoorSpace(value);
  };

  const handleIndoorSpaceClick = (value) => {
    console.log("indoor clicked:", value);
    setIndoorSpace(value);
  };

  const handleChildrenClick = (value) => {
    console.log("children clicked:", value);
    setChildren(value);
  };

  const handleOtherDogsClick = (value) => {
    console.log("otherDpgs clicked:", value);
    setOtherDogs(value);
  };

  const handleTrainingClick = (value) => {
    console.log("training clicked:", value);
    setTraining(value);
  };

  const handleFriendlinessClick = (value) => {
    console.log("friendly clicked:", value);
    setFriendliness(value);
  };

  const handleGroomingClick = (value) => {
    console.log("grooming clicked:", value);
    setGrooming(value);
  };

  const handleSheddingClick = (value) => {
    console.log("shedding clicked:", value);
    setShedding(value);
  };

  const handleBarkingClick = (value) => {
    console.log("barkingclicked:", value);
    setBarking(value);
  };

  const handleDroolingClick = (value) => {
    console.log("drooling clicked:", value);
    setDrooling(value);
  };

  const questions = [
    {
      question: "Will you and your pup have an active lifestyle?",
      component: (
        <Energy
          onNextQuestion={handleNextQuestion}
          onClick={handleEnergyClick}
        />
      ),
    },
    {
      question: "How much outdoor space do you have?",
      component: (
        <OutdoorSpace
          onNextQuestion={handleNextQuestion}
          onClick={handleOutdoorSpaceClick}
        />
      ),
    },
    {
      question: "How much indoor space do you have?",
      component: (
        <IndoorSpace
          onNextQuestion={handleNextQuestion}
          onClick={handleIndoorSpaceClick}
        />
      ),
    },
    {
      question: "Do you have children?",
      component: (
        <Children
          onNextQuestion={handleNextQuestion}
          onClick={handleChildrenClick}
        />
      ),
    },
    {
      question: "Do you have other dogs?",
      component: (
        <OtherDogs
          onNextQuestion={handleNextQuestion}
          onClick={handleOtherDogsClick}
        />
      ),
    },
    {
      question: "How much training will you give your dog?",
      component: (
        <Training
          onNextQuestion={handleNextQuestion}
          onClick={handleTrainingClick}
        />
      ),
    },
    {
      question: "How friendly should they be?",
      component: (
        <Friendly
          onNextQuestion={handleNextQuestion}
          onClick={handleFriendlinessClick}
        />
      ),
    },
    {
      question: "How much time can you spend grooming your dog?",
      component: (
        <Grooming
          onNextQuestion={handleNextQuestion}
          onClick={handleGroomingClick}
        />
      ),
    },
    {
      question: "Does shedding bother you?",
      component: (
        <Shedding
          onNextQuestion={handleNextQuestion}
          onClick={handleSheddingClick}
        />
      ),
    },
    {
      question: "Does barking bother you?",
      component: (
        <Barking
          onNextQuestion={handleNextQuestion}
          onClick={handleBarkingClick}
        />
      ),
    },
    {
      question: "Does drooling bother you?",
      component: (
        <Drooling
          onNextQuestion={handleNextQuestion}
          onClick={handleDroolingClick}
        />
      ),
    },
  ];

  return (
    <div className="question-container">
      <ToastContainer />
      <form>
        {questions[activeQuestion].component}
        {activeQuestion !== 0 && (
          <button
            type="button"
            onClick={handlePrevious}
            disabled={activeQuestion === 0}
            className="btn-prev"
          >
            <FaArrowLeft />
          </button>
        )}
        {activeQuestion === questions.length - 1 ? (
          <button
            type="button"
            className="btn-submit"
            data-testid="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNextQuestion}
            disabled={activeQuestion === questions.length - 1}
            className="btn-next"
            data-testid="next-question-btn"
          >
            <FaArrowRight />
          </button>
        )}
      </form>
      {dogData && dogData.length > 0 && <Breeds dogData={dogData} />}
    </div>
  );
};

export default Questionnaire;
