import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NotFound } from "../src/components";

test("Renders 404 header", () => {
  render(<NotFound />);
  expect(screen.getByText("404")).toBeInTheDocument();
});