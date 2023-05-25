/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greets renders correctly", () => {
  render(<Greet />);
  const textElem = screen.getByText("Hello");
  expect(textElem).toBeInTheDocument();
});

test("Greet renders with a name", () => { 
  render(<Greet name="Misho" />)
  const textElem = screen.getByText("Hello Misho");
  expect(textElem).toBeInTheDocument();
 })
