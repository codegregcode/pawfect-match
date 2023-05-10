import dogFilter from "../utilities/dogFilter";

const mockDogData = [
  {
    name: "Jack Russell",
    image_link: "https://fakelink.to/jr.png",
    energy: 5,
    grooming: 0,
    shedding: 2,
    barking: 5,
    trainability: 3,
    drooling: 3,
    good_with_children: 5,
    good_with_other_dogs: 3,
    good_with_strangers: 5,
    max_height_male: 16,
    max_height_female: 16,
  },
  {
    name: "Australian Shepherd",
    image_link: "https://fakelink.to/as.png",
    energy: 4,
    grooming: 4,
    shedding: 4,
    barking: 2,
    trainability: 4,
    drooling: 2,
    good_with_children: 3,
    good_with_other_dogs: 4,
    good_with_strangers: 4,
    max_height_male: 23,
    max_height_female: 23,
  },
  {
    name: "Yorkshire Terrier",
    image_link: "https://fakelink.to/yt",
    energy: 3,
    grooming: 3,
    shedding: 3,
    barking: 3,
    trainability: 3,
    drooling: 3,
    good_with_children: 3,
    good_with_other_dogs: 3,
    good_with_strangers: 2,
    max_height_male: 7,
    max_height_female: 7,
  },
];

describe("dogFilter", () => {
  it("should filter dogs based on outdoor space", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      "none",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Yorkshire Terrier");
  });

  it("should filter dogs based on outdoor space", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      "small",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Yorkshire Terrier");
  });

  it("should filter dogs based on children", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      "yesUnder12",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Jack Russell");
  });

  it("should filter dogs based on other dogs", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      "yes",
      null,
      null,
      null,
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Australian Shepherd");
  });

  it("should filter dogs based on training", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      null,
      "advanced",
      null,
      null,
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Australian Shepherd");
  });

  it("should filter dogs based on friendliness", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      null,
      null,
      "wary",
      null,
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Yorkshire Terrier");
  });

  it("should filter dogs based on grooming", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      null,
      null,
      null,
      "small",
      null,
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Jack Russell");
  });

  it("should filter dogs based on shedding", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "small",
      null,
      null
    );

    expect(filteredDogs[0].name).toBe("Jack Russell");
  });

  it("should filter dogs based on barking", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "small",
      null
    );

    expect(filteredDogs[0].name).toBe("Australian Shepherd");
  });

  it("shuold filter dogs based on drooling", () => {
    const filteredDogs = dogFilter(
      mockDogData,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "small"
    );

    expect(filteredDogs[0].name).toBe("Australian Shepherd");
  });
});
