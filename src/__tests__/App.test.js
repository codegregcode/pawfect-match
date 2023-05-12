import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  it("renders the Welcome component on the '/' route", () => {
    const welcomeElement = screen.getByText(/find your paw pal/i);

    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders Questionnaire component when the clink is clicked", () => {
    const linkElement = screen.getByText("Click here to start your search!");
    fireEvent.click(linkElement);
    const questionElement = screen.getByText(
      /Will you and your pup have an active lifestyle?/i
    );

    expect(questionElement).toBeInTheDocument();
  });
});
