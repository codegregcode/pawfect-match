import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "../components/Register";

describe("Register", () => {
  let errorSpy;

  beforeAll(() => {
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it("should render the register form", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Router>
        <Register />
      </Router>
    );

    const name = getByPlaceholderText("Full Name");
    const email = getByPlaceholderText("E-mail Address");
    const password = getByPlaceholderText("Password");
    const register = getByTestId("register");
    const googleReg = getByTestId("google-reg");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(register).toBeInTheDocument();
    expect(googleReg).toBeInTheDocument();
  });
});
