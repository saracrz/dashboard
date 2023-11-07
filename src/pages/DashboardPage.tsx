import { CollapsibleCard } from "../containers/CollapsibleCard";
import { useGetDashboards } from "../hooks/useGetDashboards";

export const DashboardPage = () => {
	const { dashboards, loading } = useGetDashboards();

	return !loading ? (
		<>
			{dashboards.map((dashboard) => {
				return (
					<CollapsibleCard
						key={dashboard.id}
						dashboardTitle={dashboard.displayName}
						id={dashboard.id}
					/>
				);
			})}
		</>
	) : (
		<>Loading</>
	);
};
