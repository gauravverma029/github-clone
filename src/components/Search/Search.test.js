import React from "react";
import { render } from "@testing-library/react";
import Search from "./index";

test("renders Select Language As Text in Dropdown Button", () => {
  const { getByText } = render(<Search />);
  const dropdownTextElement = getByText(/Select Language/i);
  expect(dropdownTextElement).toBeInTheDocument();
});

test("renders starred repositories As Text Checkbox", () => {
  const { getByText } = render(<Search />);
  const checkboxText = getByText(/starred repositories/i);
  expect(checkboxText).toBeInTheDocument();
});
