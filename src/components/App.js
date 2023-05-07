import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonQuestionnaire from "./PersonQuestionnaire";
import Welcome from "./Welcome";
import "../styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questionnaire" element={<PersonQuestionnaire />} />
      </Routes>
    </div>
  );
};

export default App;
