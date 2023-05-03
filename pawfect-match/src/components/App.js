import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";
import PersonQuestionnaire from "./PersonQuestionnaire";
import DogQuestionnaire from "./DogQuestionnaire";

const App = () => {
  return (
    <div className="App">
      <h1>Pawfect Match</h1>
      {/* <DogQuestionnaire /> */}

      <PersonQuestionnaire />
    </div>
  );
};

export default App;
