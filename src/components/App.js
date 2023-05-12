import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import "../styles/app.css";
import Questionnaire from "./Questionnaire";
import Navbar from "./Navbar";
import LoginSignup from "./LoginSignup";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="background-image" />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>
    </div>
  );
};

export default App;
