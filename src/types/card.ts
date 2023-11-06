import { IDashboard } from "./dashboard";

export interface ICard {
	className?: string;
	children: React.ReactNode;
}

export interface ICollapsibleCard {
	dashboardTitle: string;
	id: string;
	items: IDashboard[];
	onClickCard: Promise<void>;
	selected: boolean;
}
