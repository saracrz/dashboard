import { useGetDashboards } from "../../src/hooks/useGetDashboards";
import { IDashboards } from "../../src/types";

export const mockUseGetDashboards = (mockedDashboards: IDashboards[]): void => {
	(useGetDashboards as jest.Mock).mockReturnValue({
		dashboards: mockedDashboards,
		loading: false,
	});
};

export const mockUseGetDashboardsLoadingData = (mockedDashboards: IDashboards[]): void => {
	(useGetDashboards as jest.Mock).mockReturnValue({
		dashboards: [],
		loading: true,
	});
};
