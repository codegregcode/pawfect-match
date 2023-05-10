import React from "react";
import { render } from "@testing-library/react";
import LoginSignup from "../components/LoginSignup";

describe("LoginSignup", () => {
  it("renders title", () => {
    const { getByText } = render(<LoginSignup />);
    const headerElement = getByText(/login\/signup!/i);

    expect(headerElement).toBeInTheDocument();
  });

  it("renders email label", () => {
    const { getByText } = render(<LoginSignup />);
    const emailLabel = getByText(/email:/i);

    expect(emailLabel).toBeInTheDocument();
  });

  it("renders password label", () => {
    const { getByText } = render(<LoginSignup />);
    const pwLabel = getByText(/password:/i);

    expect(pwLabel).toBeInTheDocument();
  });

  it("renders signup button", () => {
    const { getByText } = render(<LoginSignup />);
    const signupBtn = getByText(/sign up/i);

    expect(signupBtn).toBeInTheDocument();
  });

  it("renders login button", () => {
    const { getByText } = render(<LoginSignup />);
    const loginBtn = getByText("Login");

    expect(loginBtn).toBeInTheDocument();
  });
});
