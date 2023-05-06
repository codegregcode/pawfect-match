import axios from "axios";

async function getAllBreeds() {
  const apiKey = "jdp3FIXDk65mSaJwovRCXg==fgQngpm9S336hgoo";
  const limit = 100; // set the number of results to retrieve per request
  const allBreeds = [];

  for (let offset = 0; ; offset += limit) {
    // eslint-disable-next-line no-await-in-loop
    const response = await axios.get("https://api.api-ninjas.com/v1/dogs", {
      params: {
        offset,
        limit,
      },
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    const breeds = response.data;
    allBreeds.push(...breeds);

    // stop making requests when no more results are returned
    if (breeds.length < limit) {
      break;
    }
  }

  return allBreeds;
}

export default getAllBreeds;
