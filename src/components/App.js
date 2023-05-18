import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./Welcome";
import "../styles/app.css";
import Questionnaire from "./Questionnaire";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Reset from "./Reset";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />

      <Navbar />
      <div className="background-image" />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
};

export default App;
