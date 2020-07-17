import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

test("renders Github As Text", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Github/i);
  expect(linkElement).toBeInTheDocument();
});
