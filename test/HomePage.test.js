import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HomePage } from '../src/components';

test('Renders drink check', () => {
  render(<HomePage />);
  expect(screen.getByText("drink check...")).toBeInTheDocument();
});