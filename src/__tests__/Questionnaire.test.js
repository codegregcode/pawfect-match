import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-toastify";
import Questionnaire from "../components/Questionnaire";

jest.mock("react-toastify");

describe("Questionnaire", () => {
  beforeEach(() => {
    render(<Questionnaire />);
  });

  it("displays the first question on initial render", () => {
    expect(
      screen.getByText("Will you and your pup have an active lifestyle?")
    ).toBeInTheDocument();
  });

  it("cycles through the questions following next question btn clk", () => {
    fireEvent.click(screen.getByText("A short walk or playing in the garden"));

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(
      screen.getByText("How much outdoor space do you have?")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(
      screen.getByText("How much indoor space do you have?")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(screen.getByText("Do you have children?")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(screen.getByText("Do you have other dogs?")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(
      screen.getByText("What level of training will you give them?")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(
      screen.getByText("How friendly should they be?")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(
      screen.getByText("How much time can you spend grooming your dog?")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(screen.getByText("Does shedding bother you?")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(screen.getByText("Does barking bother you?")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("next-question-btn"));

    expect(screen.getByText("Does drooling bother you?")).toBeInTheDocument();
  });

  xit("displays error message when trying to submit before answering questions", () => {
    fireEvent.click(screen.getByTestId("submit"));

    expect(toast.error).toHaveBeenCalledWith("Please answer all questions.");
  });
});
