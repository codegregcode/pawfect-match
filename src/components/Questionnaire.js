import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
  const [dogData, setDogData] = useState([]);
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

    const fetchDogs = (offset) => {
      const params = {
        energy,
        offset,
      };

      axios
        .get("https://api.api-ninjas.com/v1/dogs", {
          params,
          headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
        })
        .then((response) => {
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
          setDogData((prevDogData) => [...prevDogData, ...filteredDogs]);
          if (offset + 20 < 200) {
            fetchDogs(offset + 20);
          }
          if (offset === 200 && filteredDogs !== 0) {
            toast.success("Dogs sucessfully fetched!");
          }
        })
        .catch(() => {
          toast.error("Error fetching dogs. Please try again later.");
        });
    };

    fetchDogs(0);
  };

  const handleNextQuestion = () => {
    setActiveQuestion(activeQuestion + 1);
  };

  const handlePrevious = () => {
    setActiveQuestion(activeQuestion - 1);
  };

  const handleEnergyClick = (energyLevel) => {
    setEnergy(energyLevel);
    handleNextQuestion();
  };

  const handleOutdoorSpaceClick = (value) => {
    setOutdoorSpace(value);
    handleNextQuestion();
  };

  const handlIndoorSpaceClick = (value) => {
    setIndoorSpace(value);
    handleNextQuestion();
  };

  const handleChildrenClick = (value) => {
    setChildren(value);
    handleNextQuestion();
  };

  const handleOtherDogsClick = (value) => {
    setOtherDogs(value);
    handleNextQuestion();
  };

  const handleTrainingClick = (value) => {
    setTraining(value);
    handleNextQuestion();
  };

  const handleFriendlinessClick = (value) => {
    setFriendliness(value);
    handleNextQuestion();
  };

  const handleGroomingClick = (value) => {
    setGrooming(value);
    handleNextQuestion();
  };

  const handleSheddingClick = (value) => {
    setShedding(value);
    handleNextQuestion();
  };

  const handleBarkingClick = (value) => {
    setBarking(value);
    handleNextQuestion();
  };

  const handleDroolingClick = (value) => {
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
          onClick={handlIndoorSpaceClick}
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
