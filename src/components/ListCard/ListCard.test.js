import React from "react";
import { render } from "@testing-library/react";
import ListCard from "./index";
import { MockData } from "../../mockData/repoList";

test("renders Repo Name in List card", () => {
  const { getByText } = render(<ListCard content={MockData} />);
  const repoName = getByText(/super-expressive/i);
  expect(repoName).toBeInTheDocument();
});

test("renders Description in List card", () => {
  const { getByText } = render(<ListCard content={MockData} />);
  const description = getByText(/Super Expressive is/i);
  expect(description).toBeInTheDocument();
});

test("renders stargazers_count in List card", () => {
  const { getByText } = render(<ListCard content={MockData} />);
  const stargazersCount = getByText(/642/i);
  expect(stargazersCount).toBeInTheDocument();
});
