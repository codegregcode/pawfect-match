import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonQuestionnaire from './PersonQuestionnaire';
import SearchResults from './SearchResults';

import '../styles/app.css';

const App = () => {
  return (
    <div className="App">
      <h1>Pawfect Match</h1>
      <Routes>
        <Route path="person-questionnaire" element={<PersonQuestionnaire />} />
        <Route path="search-results" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
