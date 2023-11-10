import { useEffect, useState } from "react";

import { getDashboards } from "../services/api";
import { IDashboard } from "../types";

export const useGetDashboards = () => {
	const [dashboards, setDashboards] = useState<IDashboard[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		getDashboards()
			.then((response) => {
				setDashboards(response);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return { dashboards, loading };
};
