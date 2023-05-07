import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PersonQuestionnaire from "../components/PersonQuestionnaire";

describe("PersonQuestionnaire", () => {
  it("renders correctly", () => {
    render(<PersonQuestionnaire />);
  });
});
