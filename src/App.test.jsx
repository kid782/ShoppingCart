import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders heading", () => {
    render(<App />);
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument;
  });
});
