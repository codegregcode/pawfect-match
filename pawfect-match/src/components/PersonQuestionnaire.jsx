import React, { useState } from "react";

const PersonQuestionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [breeds, setBreeds] = useState([]);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:3000/breeds`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    })
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <div className="living">
        <h2>Where do you live?</h2>
        <button onClick={() => handleAnswer("location", "house")}>House</button>
        <button onClick={() => handleAnswer("location", "apartment")}>
          Apartment
        </button>
      </div>
      <div>
        <h2>How much outdoor space do you have?</h2>
        <button onClick={() => handleAnswer("outdoor_space", "none")}>
          None
        </button>
        <button onClick={() => handleAnswer("outdoor_space", "small_garden")}>
          Small Garden
        </button>
        <button onClick={() => handleAnswer("outdoor_space", "medium_garden")}>
          Medium Garden
        </button>
        <button onClick={() => handleAnswer("outdoor_space", "large_garden")}>
          Large Garden
        </button>
      </div>
      <div>
        <h2>Will there be any children in the household?</h2>
        <button onClick={() => handleAnswer("children", "no_never")}>
          No, never ever
        </button>
        <button onClick={() => handleAnswer("children", "maybe_soon")}>
          Maybe soon...
        </button>
        <button onClick={() => handleAnswer("children", "under_12")}>
          I have kids under 12
        </button>
        <button onClick={() => handleAnswer("children", "over_12")}>
          I have kids over 12
        </button>
      </div>
      <div>
        <h2>Have you owned a dog before?</h2>
        <button onClick={() => handleAnswer("owned_dog", "yes")}>Yes</button>
        <button onClick={() => handleAnswer("owned_dog", "no")}>No</button>
      </div>
      <div>
        <h2>How much training will you give your dog?</h2>
        <button onClick={() => handleAnswer("training", "none")}>None</button>
        <button onClick={() => handleAnswer("training", "basic")}>Basic</button>
        <button onClick={() => handleAnswer("training", "advanced")}>
          Advanced
        </button>
      </div>
      <div>
        <h2>How much exercise will your dog receive?</h2>
        <button onClick={() => handleAnswer("exercise", "just_playing_inside")}>
          Just playing inside
        </button>
        <button onClick={() => handleAnswer("exercise", "short_walks")}>
          Short walks
        </button>
        <button
          onClick={() =>
            handleAnswer("exercise", "mix_of_short_and_long_walks")
          }
        >
          A mix of short and long walks
        </button>
        <button onClick={() => handleAnswer("exercise", "hikes_and_jogs")}>
          Hikes and Jogs
        </button>
      </div>
      <div>
        <h2>How much time will your dog be alone?</h2>
        <button
          onClick={() => handleAnswer("alone_time", "home_most_of_the_day")}
        >
          We will be home for most of the day
        </button>
        <button onClick={() => handleAnswer("alone_time", "4_hours")}>
          Alone for 4 hours a day
        </button>
        <button onClick={() => handleAnswer("alone_time", "until_I_get_home")}>
          Until I get home from work
        </button>
        <button onClick={() => handleAnswer("alone_time", "long_periods")}>
          Long periods lone
        </button>
      </div>
    </div>
  );
};

export default PersonQuestionnaire;
