import React, { useState } from "react";

const DogQuestionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [breeds, setBreeds] = useState([]);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  return (
    <div>
      <h1>Getting to know your dog</h1>{" "}
    </div>
  );
};

export default DogQuestionnaire;
