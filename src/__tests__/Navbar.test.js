import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders title", () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );
    const titleElement = getByText("Pawfect Match!");

    expect(titleElement).toBeInTheDocument();
  });

  it("renders login/signup button", () => {
    const { getByRole } = render(
      <Router>
        <Navbar />
      </Router>
    );
    const buttonElement = getByRole("button");

    expect(buttonElement).toHaveTextContent("Login/SignUp!");
  });

  it("login/signup button links to LoginSignup component", () => {
    const { getByRole } = render(
      <Router>
        <Navbar />
      </Router>
    );
    const buttonElement = getByRole("button");

    expect(buttonElement.closest("a")).toHaveAttribute("href", "/login-signup");
  });
});
