import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonQuestionnaire from "./PersonQuestionnaire";
import Welcome from "./Welcome";
import "../styles/app.css";
import Questionnaire from "./Questionnaire";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/personQuestionnaire" element={<PersonQuestionnaire />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </div>
  );
};

export default App;
