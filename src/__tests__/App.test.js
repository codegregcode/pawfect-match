import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  it("renders the Welcome component on the '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const welcomeElement = screen.getByText(/find your paw pal/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders the PersonQuestionnaire component when the link is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/click here/i);
    fireEvent.click(linkElement);
    const questionElement = screen.getByText(/Pawfect Match!/i);
    expect(questionElement).toBeInTheDocument();
  });
});
