import { FC, useState } from "react";

import { ChevronDown, ChevronUp } from "../assets/icons";
import { Card, Content } from "../components";
import { ICollapsibleCard } from "../types/card";
import { CollapsibleCardWrapper, CollapsibleTitleWrapper } from "./styles";

export const CollapsibleCard: FC<ICollapsibleCard> = ({
	dashboardTitle,
	onClickCard,
	selected,
	items,
}) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<CollapsibleCardWrapper>
			<Card>
				<CollapsibleTitleWrapper onClick={toggleCollapse}>
					<h6>{dashboardTitle}</h6>
					<button onClick={onClickCard}>{isCollapsed ? <ChevronDown /> : <ChevronUp />}</button>
				</CollapsibleTitleWrapper>
				{selected && !isCollapsed && <Content items={items} />}
			</Card>
		</CollapsibleCardWrapper>
	);
};
