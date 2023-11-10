import { useGetDashboard } from "../../src/hooks/useGetDashboard";
import { IDashboard } from "../../src/types";

export const mockUseGetDashboard = (mockedData: IDashboard): void => {
	(useGetDashboard as jest.Mock).mockReturnValue({
		dashboardData: mockedData,
		loadingDashboard: false,
	});
};
