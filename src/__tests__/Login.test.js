import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../components/Login";

describe("Login", () => {
  let errorSpy;

  beforeAll(() => {
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it("should render the login form", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const emailInput = getByPlaceholderText("E-mail Address");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByTestId("login-btn");
    const loginWithGoogleButton = getByText("Login with Google");
    const registerLink = getByText("Register");
    const resetPasswordLink = getByText("here");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(loginWithGoogleButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
    expect(resetPasswordLink).toBeInTheDocument();
  });
});
