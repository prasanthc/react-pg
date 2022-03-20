import React from "react";
import { render } from "@testing-library/react";
import { Search } from "./Search";

test("renders learn react link", () => {
  const { getByText } = render(<Search />);

  console.log("getbyText****************", getByText);
  const linkElement = getByText(/Search Results/i);
  expect(linkElement).toBeInTheDocument();
});
