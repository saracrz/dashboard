/* eslint-disable jest/no-mocks-import */
import { render, screen } from "@testing-library/react";

import { mockedDashboards } from "../../tests/fixtures/index";
import {
	mockUseGetDashboards,
	mockUseGetDashboardsLoadingData,
} from "../../tests/fixtures/useGetDashboards";
import { DashboardPage } from "./DashboardPage";

jest.mock("../hooks/useGetDashboards", () => ({
	useGetDashboards: jest.fn(),
}));

test("Dashboard component displays dashboards titles", () => {
	mockUseGetDashboards(mockedDashboards);
	render(<DashboardPage />);

	expect(screen.getByText("Antenatal Care")).toBeInTheDocument();
	expect(screen.getByText("Cases Malaria")).toBeInTheDocument();
	expect(screen.getByText("Delivery")).toBeInTheDocument();
	expect(screen.getByText("Disease Surveillance")).toBeInTheDocument();
	expect(screen.getByText("Immunization")).toBeInTheDocument();
});

test("Dashboard component when loading data should not display", () => {
	mockUseGetDashboardsLoadingData([]);
	render(<DashboardPage />);

	expect(screen.queryByText("Antenatal Care")).not.toBeInTheDocument();
	expect(screen.queryByText("Cases Malaria")).not.toBeInTheDocument();
	expect(screen.queryByText("Delivery")).not.toBeInTheDocument();
	expect(screen.queryByText("Disease Surveillance")).not.toBeInTheDocument();
	expect(screen.queryByText("Immunization")).not.toBeInTheDocument();

	expect(screen.getByText("Loading")).toBeInTheDocument();
});
