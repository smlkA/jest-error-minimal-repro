import React from "react";
import { render } from "@testing-library/react";
import { ExampleComponent } from "../ExampleComponent";

describe("ExampleComponent", () => {
  it("renders", () => {
    const { getByText } = render(<ExampleComponent />);
    expect(getByText("Example Component")).toBeInTheDocument();
  });
});
