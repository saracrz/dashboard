import { useEffect, useState } from "react";

import { getDashboardDetails } from "../services/api";
import { IDashboard } from "../types";

export const useGetDashboard = (id: string) => {
	const [dashboardData, setDashboardData] = useState<IDashboard | null>(null);
	const [loadingDashboard, setLoadingDashboard] = useState(true);
	const [error, setError] = useState<boolean | null>(null);

	useEffect(() => {
		setLoadingDashboard(true);
		getDashboardDetails(id)
			.then((response) => {
				setDashboardData(response);
				setLoadingDashboard(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoadingDashboard(false);
				setError(true);
			});
	}, [id]);

	return {
		dashboardData,
		loadingDashboard,
		error,
	};
};
