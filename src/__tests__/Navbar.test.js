import React from "react";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/Navbar";

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(),
}));

jest.mock("../firebase", () => ({
  auth: {},
}));

describe("Navbar", () => {
  beforeEach(() => {
    useAuthState.mockReturnValue([{ uid: "aUiD" }]);
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it("renders home btn", () => {
    const home = screen.getByTestId("home-btn");
    expect(home).toHaveTextContent("Home");
  });

  it("renders dashboard btn when user is authenticated", () => {
    act(() => {
      const dashboard = screen.getByTestId("dashboard-btn");
      expect(dashboard).toHaveTextContent("Dashboard");
    });
  });

  it("does not render login btn when user is authenticated", () => {
    const login = screen.queryByTestId("login-btn");
    expect(login).toBeNull();
  });

  it("renders signout btn when user is authenticated", () => {
    act(() => {
      const signout = screen.getByTestId("signout-btn");
      expect(signout).toHaveTextContent("Sign Out");
    });
  });
});
