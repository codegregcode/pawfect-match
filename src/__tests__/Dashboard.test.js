import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { getFaves } from "../firebase";

jest.mock("../firebase");

describe("dashboard", () => {
  let errorSpy;

  beforeAll(() => {
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it("should render dashboard", () => {
    const { getByText } = render(
      <Router>
        <Dashboard />
      </Router>
    );

    const dashboard = getByText("Dashboard");
    expect(dashboard).toBeInTheDocument();
  });

  it("should call getFaves fn", () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    expect(getFaves).toHaveBeenCalledTimes(1);
  });

  it("renders all dogs with correct info", async () => {
    const mockFaveDogs = [
      {
        breed: {
          name: "Jack Russell",
          image_link: "https://fakelink.to/jr.png",
          energy: 5,
          grooming: 5,
          shedding: 5,
          barking: 5,
          trainability: 5,
          good_with_other_children: 5,
          good_with_other_dogs: 5,
          good_with_strangers: 5,
          max_height_male: 15,
        },
      },
      {
        breed: {
          name: "Australian Shepherd",
          image_link: "https://fakelink.to/as.png",
          energy: 4,
          grooming: 4,
          shedding: 4,
          barking: 4,
          trainability: 4,
          good_with_other_children: 4,
          good_with_other_dogs: 4,
          good_with_strangers: 4,
          max_height_male: 23,
        },
      },
      {
        breed: {
          name: "Yorkshire Terrier",
          image_link: "https://fakelink.to/yt",
          energy: 3,
          grooming: 3,
          shedding: 3,
          barking: 3,
          trainability: 3,
          good_with_other_children: 3,
          good_with_other_dogs: 3,
          good_with_strangers: 3,
          max_height_male: 7,
        },
      },
    ];

    getFaves.mockResolvedValue(mockFaveDogs);

    const { getByText, getByAltText } = render(<Dashboard />);

    await waitFor(() => {
      mockFaveDogs.forEach((dog) => {
        expect(getByText(dog.breed.name)).toBeInTheDocument();
        expect(getByAltText(dog.breed.name)).toHaveAttribute(
          "src",
          dog.breed.image_link
        );
        expect(getByText(`Energy: ${dog.breed.energy}`)).toBeInTheDocument();
        expect(
          getByText(`Grooming: ${dog.breed.grooming}`)
        ).toBeInTheDocument();
        expect(
          getByText(`Shedding: ${dog.breed.shedding}`)
        ).toBeInTheDocument();
        expect(getByText(`Barking: ${dog.breed.barking}`)).toBeInTheDocument();
        expect(
          getByText(`Easy to train: ${dog.breed.trainability}`)
        ).toBeInTheDocument();
        expect(
          getByText(`Good With Children: ${dog.breed.good_with_other_children}`)
        ).toBeInTheDocument();
        expect(
          getByText(`Good With Other Dogs: ${dog.breed.good_with_other_dogs}`)
        ).toBeInTheDocument();
        expect(
          getByText(`Good With Strangers: ${dog.breed.good_with_strangers}`)
        ).toBeInTheDocument();
        expect(
          getByText(`Max Size: ${dog.breed.max_height_male}`)
        ).toBeInTheDocument();
      });
    });
  });
});
