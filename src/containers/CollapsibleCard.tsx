import { FC, useEffect, useState } from "react";

import { ChevronDown, ChevronUp, Star, StarFilled } from "../assets/icons";
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
	const [isFavorite, setFavorite] = useState<boolean>(false);
	const { dashboardData } = useGetDashboard(id);
	const isCollapsed = openCardId !== id;

	useEffect(() => {
		const storedFavorite = localStorage.getItem(dashboardTitle);
		if (storedFavorite === "favorite") {
			setFavorite(true);
		}
	}, [dashboardTitle]);

	const toggleCollapse = (): void => {
		setOpenCardId(isCollapsed ? id : null);
	};

	const toggleFavorite = () => {
		setFavorite(!isFavorite);
		localStorage.setItem(dashboardTitle, !isFavorite ? "favorite" : "");
	};

	return (
		<CollapsibleCardWrapper>
			<Card>
				<CollapsibleTitleWrapper>
					<h6>{dashboardTitle}</h6>
					<div>
						<button onClick={toggleFavorite}>{isFavorite ? <StarFilled /> : <Star />}</button>
						<button onClick={toggleCollapse}>
							{isCollapsed ? <ChevronDown /> : <ChevronUp />}
						</button>
					</div>
				</CollapsibleTitleWrapper>
				{!isCollapsed && <Content items={dashboardData?.dashboardItems as IDashboardItem[]} />}
			</Card>
		</CollapsibleCardWrapper>
	);
};
