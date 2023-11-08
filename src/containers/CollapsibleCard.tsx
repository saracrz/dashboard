import { FC } from "react";

import { ChevronDown, ChevronUp } from "../assets/icons";
import { Card } from "../components";
import { useGetDashboard } from "../hooks/useGetDashboard";
import { IDashboardItem } from "../types";
import { ICollapsibleCard } from "../types/card";
import { Content } from "./Content";
import { CollapsibleCardWrapper, CollapsibleTitleWrapper } from "./styles";

export const CollapsibleCard: FC<ICollapsibleCard> = ({
	dashboardTitle,
	id,
	setOpenCardId,
	openCardId,
}) => {
	const { dashboardData } = useGetDashboard(id);
	const isCollapsed = openCardId !== id;

	const toggleCollapse = (): void => {
		setOpenCardId(isCollapsed ? id : null);
	};

	return (
		<CollapsibleCardWrapper>
			<Card>
				<CollapsibleTitleWrapper onClick={toggleCollapse}>
					<h6>{dashboardTitle}</h6>
					<button onClick={toggleCollapse}>{isCollapsed ? <ChevronDown /> : <ChevronUp />}</button>
				</CollapsibleTitleWrapper>
				{!isCollapsed && <Content items={dashboardData?.dashboardItems as IDashboardItem[]} />}
			</Card>
		</CollapsibleCardWrapper>
	);
};
