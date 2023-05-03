import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';

const PersonQuestionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [breeds, setBreeds] = useState([]);

  const [trainability, setTrainability] = useState('');
  const [energy, setEnergy] = useState('');
  const [shedding, setShedding] = useState('');
  const [barking, setBarking] = useState('');

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      energy,
      trainability,
      shedding,
      barking,
    };

    axios
      .get('https://api.api-ninjas.com/v1/dogs', {
        params: params,
        headers: { 'X-Api-Key': 'ENTER YOUR API KEY HERE' },
      })
      .then((response) => {
        console.log(response.data);
        setBreeds(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="energy">
          Energy (0-5):
          <input
            type="number"
            value={energy}
            onChange={(event) => setEnergy(event.target.value)}
          />
        </label>
        <label htmlFor="training">
          Training
          <input
            type="number"
            value={trainability}
            onChange={(event) => setTrainability(event.target.value)}
          />
        </label>
        <label htmlFor="shedding">
          Shedding
          <input
            type="number"
            value={shedding}
            onChange={(event) => setShedding(event.target.value)}
          />
        </label>
        <label htmlFor="barking">
          Barking
          <input
            type="number"
            value={barking}
            onChange={(event) => setBarking(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="living">
        <h2>Where do you live?</h2>
        <button onClick={() => handleAnswer('location', 'house')}>House</button>
        <button onClick={() => handleAnswer('location', 'apartment')}>
          Apartment
        </button>
      </div>
      <div>
        <h2>How much outdoor space do you have?</h2>
        <button onClick={() => handleAnswer('outdoor_space', 'none')}>
          None
        </button>
        <button onClick={() => handleAnswer('outdoor_space', 'small_garden')}>
          Small Garden
        </button>
        <button onClick={() => handleAnswer('outdoor_space', 'medium_garden')}>
          Medium Garden
        </button>
        <button onClick={() => handleAnswer('outdoor_space', 'large_garden')}>
          Large Garden
        </button>
      </div>
      <div>
        <h2>Will there be any children in the household?</h2>
        <button onClick={() => handleAnswer('children', 'no_never')}>
          No, never ever
        </button>
        <button onClick={() => handleAnswer('children', 'maybe_soon')}>
          Maybe soon...
        </button>
        <button onClick={() => handleAnswer('children', 'under_12')}>
          I have kids under 12
        </button>
        <button onClick={() => handleAnswer('children', 'over_12')}>
          I have kids over 12
        </button>
      </div>
      <div>
        <h2>Have you owned a dog before?</h2>
        <button onClick={() => handleAnswer('owned_dog', 'yes')}>Yes</button>
        <button onClick={() => handleAnswer('owned_dog', 'no')}>No</button>
      </div>
      <div>
        <h2>How much training will you give your dog?</h2>
        <button onClick={() => handleAnswer('training', 'none')}>None</button>
        <button onClick={() => handleAnswer('training', 'basic')}>Basic</button>
        <button onClick={() => handleAnswer('training', 'advanced')}>
          Advanced
        </button>
      </div>
      <div>
        <h2>How much exercise will your dog receive?</h2>
        <button onClick={() => handleAnswer('exercise', 'just_playing_inside')}>
          Just playing inside
        </button>
        <button onClick={() => handleAnswer('exercise', 'short_walks')}>
          Short walks
        </button>
        <button
          onClick={() =>
            handleAnswer('exercise', 'mix_of_short_and_long_walks')
          }
        >
          A mix of short and long walks
        </button>
        <button onClick={() => handleAnswer('exercise', 'hikes_and_jogs')}>
          Hikes and Jogs
        </button>
      </div>
      <div>
        <h2>How much time will your dog be alone?</h2>
        <button
          onClick={() => handleAnswer('alone_time', 'home_most_of_the_day')}
        >
          We will be home for most of the day
        </button>
        <button onClick={() => handleAnswer('alone_time', '4_hours')}>
          Alone for 4 hours a day
        </button>
        <button onClick={() => handleAnswer('alone_time', 'until_I_get_home')}>
          Until I get home from work
        </button>
        <button onClick={() => handleAnswer('alone_time', 'long_periods')}>
          Long periods lone
        </button>
      </div>
    </div>
  );
};

export default PersonQuestionnaire;
