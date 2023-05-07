const dogFilter = (
  dogs,
  outdoorSpace,
  indoorSpace,
  children,
  otherDogs,
  training,
  friendliness,
  grooming,
  shedding,
  barking,
  drooling
) => {
  return dogs.filter((dog) => {
    const dogSize = dog.max_height_male;
    let filtered = true;

    if (outdoorSpace === "none") {
      filtered = dogSize <= 15;
    } else if (outdoorSpace === "medium") {
      filtered = dogSize >= 0 && dogSize < 25;
    } else if (outdoorSpace === "large") {
      filtered = dogSize >= 0;
    }

    if (indoorSpace === "small") {
      filtered = dog.max_height_female <= 15;
    } else if (indoorSpace === "medium") {
      filtered = dog.max_height_female <= 25;
    } else if (indoorSpace === "large") {
      filtered = dog.max_height_female <= 100;
    }

    if (children === "yesUnder12") {
      filtered = filtered && dog.good_with_children >= 4;
    } else if (children === "yesOver12") {
      filtered = filtered && dog.good_with_children >= 3;
    } else if (children === "maybe") {
      filtered = filtered && dog.good_with_children >= 2;
    } else if (children === "no") {
      filtered = filtered && dog.good_with_children >= 1;
    }

    if (otherDogs === "yes") {
      filtered = filtered && dog.good_with_other_dogs >= 4;
    } else if (otherDogs === "maybe") {
      filtered = filtered && dog.good_with_other_dogs >= 3;
    }

    if (training === "advanced") {
      filtered = filtered && dog.trainability >= 4;
    }

    if (friendliness === "wary") {
      filtered = filtered && dog.good_with_strangers <= 2;
    } else if (friendliness === "mostly") {
      filtered =
        filtered &&
        dog.good_with_strangers >= 3 &&
        dog.good_with_strangers <= 4;
    } else if (friendliness === "very") {
      filtered = filtered && dog.good_with_strangers >= 4;
    }

    if (grooming === "small") {
      filtered = filtered && dog.grooming <= 1;
    } else if (grooming === "medium") {
      filtered = filtered && dog.grooming <= 2;
    } else if (grooming === "high") {
      filtered = filtered && dog.grooming >= 2;
    }

    if (shedding === "small") {
      filtered = filtered && dog.shedding <= 2;
    } else if (grooming === "medium") {
      filtered = filtered && dog.shedding <= 3;
    }

    if (barking === "small") {
      filtered = filtered && dog.barking <= 2;
    } else if (grooming === "medium") {
      filtered = filtered && dog.grooming <= 3;
    }

    if (drooling === "small") {
      filtered = filtered && dog.drooling <= 2;
    } else if (grooming === "medium") {
      filtered = filtered && dog.drooling <= 3;
    }

    return filtered;
  });
};

export default dogFilter;
