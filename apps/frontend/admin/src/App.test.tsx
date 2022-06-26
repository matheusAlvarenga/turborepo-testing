import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the title", () => {
  render(<App />);
  const element = screen.getByText(/Admin CRA Application/i);
  expect(element).toBeInTheDocument();
});
