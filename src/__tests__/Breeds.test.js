import React from "react";
import { render } from "@testing-library/react";
import Breeds from "../components/Breeds";

const mockDogData = [
  {
    name: "Jack Russell",
    image_link: "https://fakelink.to/jr.png",
    energy: 5,
    grooming: 5,
    shedding: 5,
    barking: 5,
    trainability: 5,
    good_with_children: 5,
    good_with_other_dogs: 5,
    good_with_strangers: 5,
    max_height_male: 15,
  },
  {
    name: "Australian Shepherd",
    image_link: "https://fakelink.to/as.png",
    energy: 4,
    grooming: 4,
    shedding: 4,
    barking: 4,
    trainability: 4,
    good_with_children: 4,
    good_with_other_dogs: 4,
    good_with_strangers: 4,
    max_height_male: 23,
  },
  {
    name: "Yorkshire Terrier",
    image_link: "https://fakelink.to/yt",
    energy: 3,
    grooming: 3,
    shedding: 3,
    barking: 3,
    trainability: 3,
    good_with_children: 3,
    good_with_other_dogs: 3,
    good_with_strangers: 3,
    max_height_male: 7,
  },
];

describe("Breeds", () => {
  xit("renders breeds component with correct number of dogs", () => {
    const { getAllByRole } = render(<Breeds dogData={mockDogData} />);
    const dogs = getAllByRole("img");
    expect(dogs).toHaveLength(mockDogData.length);
  });

  it("renders the correct information for dogs", () => {
    const { getByText, getByAltText } = render(
      <Breeds dogData={mockDogData} />
    );

    mockDogData.forEach((dog) => {
      expect(getByText(dog.name)).toBeInTheDocument();
      expect(getByAltText(dog.name)).toHaveAttribute("src", dog.image_link);
      expect(getByText(`Energy: ${dog.energy}`)).toBeInTheDocument();
      expect(getByText(`Grooming: ${dog.grooming}`)).toBeInTheDocument();
      expect(getByText(`Shedding: ${dog.shedding}`)).toBeInTheDocument();
      expect(getByText(`Barking: ${dog.barking}`)).toBeInTheDocument();
      expect(
        getByText(`Easy to Train: ${dog.trainability}`)
      ).toBeInTheDocument();
      expect(
        getByText(`Good With Children: ${dog.good_with_children}`)
      ).toBeInTheDocument();
      expect(
        getByText(`Good With Other Dogs: ${dog.good_with_other_dogs}`)
      ).toBeInTheDocument();
      expect(
        getByText(`Good With Strangers: ${dog.good_with_strangers}`)
      ).toBeInTheDocument();
      expect(
        getByText(`Max Size: ${dog.max_height_male} "`)
      ).toBeInTheDocument();
    });
  });
});
