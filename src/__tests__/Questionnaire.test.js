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
    const clickByText = (text) => fireEvent.click(screen.getByText(text));

    clickByText("A short walk or playing in the garden");
    expect(
      screen.getByText("How much outdoor space do you have?")
    ).toBeInTheDocument();

    clickByText("I have no outdoor space");
    expect(
      screen.getByText("How much indoor space do you have?")
    ).toBeInTheDocument();

    clickByText("I live in a small apartment");
    expect(screen.getByText("Do you have children?")).toBeInTheDocument();

    clickByText("No, never ever");
    expect(screen.getByText("Do you have other dogs?")).toBeInTheDocument();

    clickByText("No");
    expect(
      screen.getByText("What level of training will you give them?")
    ).toBeInTheDocument();

    clickByText("Basic");
    expect(
      screen.getByText("How friendly should they be?")
    ).toBeInTheDocument();

    clickByText("Friendly with everyone!");
    expect(
      screen.getByText("How much time can you spend grooming your dog?")
    ).toBeInTheDocument();

    clickByText("Just the occasional brush");
    expect(screen.getByText("Does shedding bother you?")).toBeInTheDocument();

    clickByText("A little shedding is ok");
    expect(screen.getByText("Does barking bother you?")).toBeInTheDocument();

    clickByText("A little barking is ok");
    expect(screen.getByText("Does drooling bother you?")).toBeInTheDocument();
  });

  it("displays error message when trying to submit before answering questions", () => {
    const nextQuestionButton = screen.getByTestId("next-question-btn");

    for (let i = 0; i < 10; i += 1) {
      fireEvent.click(nextQuestionButton);
    }

    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);
    expect(toast.error).toHaveBeenCalledWith("Please answer all questions.");
  });
});
