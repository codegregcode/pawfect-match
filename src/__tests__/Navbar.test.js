import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import { logout } from "../firebase";

jest.mock("../firebase", () => ({
  logout: jest.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });

  it("renders home btn", () => {
    const home = screen.getByTestId("home-btn");

    expect(home).toHaveTextContent("Home");
  });

  it("home btn links to App component", () => {
    const home = screen.getByTestId("home-btn");

    expect(home.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders dashboard btn", () => {
    const dashboard = screen.getByTestId("dashboard-btn");

    expect(dashboard).toHaveTextContent("Dashboard");
  });

  it("dashboard btn links to Dashboard component", () => {
    const dashboard = screen.getByTestId("dashboard-btn");

    expect(dashboard.closest("a")).toHaveAttribute("href", "/dashboard");
  });

  it("renders login btn", () => {
    const login = screen.getByTestId("login-btn");

    expect(login).toHaveTextContent("Login/SignUp!");
  });

  it("login btn links to Login component", () => {
    const login = screen.getByTestId("login-btn");

    expect(login.closest("a")).toHaveAttribute("href", "/login");
  });

  it("renders signout btn", () => {
    const signout = screen.getByTestId("signout-btn");

    expect(signout).toHaveTextContent("Sign Out");
  });

  it("signout btn links to App component", () => {
    const signout = screen.getByTestId("signout-btn");

    expect(signout.closest("a")).toHaveAttribute("href", "/");
  });

  it("signout btn calls logout fn", () => {
    const signout = screen.getByTestId("signout-btn");

    fireEvent.click(signout);

    expect(logout).toHaveBeenCalled();
  });
});
