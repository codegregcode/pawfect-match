const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// define API endpoints
app.get("/dogs", (req, res) => {
  // retrieve query parameters from request
  const {
    location,
    outdoor_space,
    children,
    dog_owned,
    training,
    exercise,
    grooming,
    shedding,
    barking,
    other_dogs,
    friendliness,
    size,
  } = req.query;

  // make API call to external API
  fetch(
    `https://api-ninjas.com/api/dogs?location=${location}&outdoor_space=${outdoor_space}&children=${children}&dog_owned=${dog_owned}&training=${training}&exercise=${exercise}&grooming=${grooming}&shedding=${shedding}&barking=${barking}&other_dogs=${other_dogs}&friendliness=${friendliness}&size=${size}`
  )
    .then((response) => response.json())
    .then((data) => {
      // return data to client as JSON
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

// start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
