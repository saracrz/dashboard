import { render, screen } from "@testing-library/react";

import { mockedDashboardData } from "../../tests/fixtures";
import { mockUseGetDashboard } from "../../tests/fixtures/useGetDashboard";
import { CollapsibleCard } from "./CollapsibleCard";

jest.mock("../hooks/useGetDashboard");

test("Collapsible Card component displays dashboards data when id and openCardId are equals", async () => {
	const mockedSetOpenCard = jest.fn();
	mockUseGetDashboard(mockedDashboardData);

	render(
		<CollapsibleCard
			dashboardTitle="Antenatal Care"
			id="nghVC4wtyzi"
			openCardId="nghVC4wtyzi"
			setOpenCardId={mockedSetOpenCard}
		/>
	);

	await screen.findByText("Coverage by quarter and district (two-category)");
	expect(screen.getByText("Coverage by quarter and district (two-category)")).toBeInTheDocument();
});

test("Collapsible Card component does not display the dashboards data when id and openCardId are not equals", () => {
	const mockedSetOpenCard = jest.fn();
	mockUseGetDashboard(mockedDashboardData);

	render(
		<CollapsibleCard
			dashboardTitle="Antenatal Care"
			id="nghVC4wtyzi"
			openCardId="another-id"
			setOpenCardId={mockedSetOpenCard}
		/>
	);

	expect(
		screen.queryByText("Coverage by quarter and district (two-category)")
	).not.toBeInTheDocument();
});
