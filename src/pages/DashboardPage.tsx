import { useState } from "react";

import { CollapsibleCard } from "../containers/CollapsibleCard";
import { useGetDashboards } from "../hooks/useGetDashboards";
import { getDashboardDetails } from "../services/api";
import { IDashboard } from "../types";

export const DashboardPage = () => {
	const [selectedDashboard, setSelectedDashboard] = useState<IDashboard | null>(null);
	const { dashboards, loading } = useGetDashboards();

	const handleDashboardClick = async (id: string): Promise<void> => {
		const response = await getDashboardDetails(id);

		setSelectedDashboard(response);
	};

	return !loading ? (
		<>
			{dashboards.map((dashboard) => {
				return (
					<CollapsibleCard
						key={dashboard.id}
						items={selectedDashboard?.dashboardItems}
						dashboardTitle={dashboard.displayName}
						onClickCard={() => handleDashboardClick(dashboard.id)}
						id={dashboard.id}
						selected={selectedDashboard?.id === dashboard.id}
					/>
				);
			})}
		</>
	) : (
		<>Loading</>
	);
};
