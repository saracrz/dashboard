import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("App component display header", () => {
	render(<App />);

	const heading = screen.getByText("Dashboards");

	expect(heading).toBeInTheDocument();
});
