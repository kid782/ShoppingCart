import { render, screen } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "./Header";

const mockRoute = createBrowserRouter([
	{
		path: "/",
		element: <Header />
	}
])

describe("Header component", () => {
	it("Renders navigation", () => {
		render(<RouterProvider router={mockRoute} />);
		const navigation = screen.getByRole("navigation");
		expect(navigation).toBeInTheDocument();
	})
})