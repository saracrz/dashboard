import { useEffect, useState } from "react";

import { CollapsibleCard } from "../containers/CollapsibleCard";
import { Divider } from "../containers/styles";
import { useGetDashboards } from "../hooks/useGetDashboards";

export const DashboardsPage = () => {
	const { dashboards, loading } = useGetDashboards();
	const [openCardId, setOpenCardId] = useState<string | null>(null);

	useEffect(() => {
		setOpenCardId(dashboards[0]?.id);
	}, [dashboards]);

	return !loading && dashboards.length > 0 ? (
		<>
			<Divider />
			{dashboards.map((dashboard) => {
				return (
					<CollapsibleCard
						key={dashboard.id}
						dashboardTitle={dashboard.displayName}
						id={dashboard.id}
						openCardId={openCardId}
						setOpenCardId={setOpenCardId}
					/>
				);
			})}
		</>
	) : (
		<>Loading</>
	);
};
