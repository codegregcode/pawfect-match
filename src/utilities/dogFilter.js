const dogFilter = (dogs, outdoorSpace, children) => {
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

    if (children === "yesUnder12") {
      filtered = filtered && dog.good_with_children >= 4;
    } else if (children === "yesOver12") {
      filtered = filtered && dog.good_with_children >= 3;
    } else if (children === "maybe") {
      filtered = filtered && dog.good_with_children >= 2;
    } else if (children === "no") {
      filtered = filtered && dog.good_with_children >= 1;
    }

    return filtered;
  });
};

export default dogFilter;
