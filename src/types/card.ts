export interface ICard {
	className?: string;
	children: React.ReactNode;
}

export interface ICollapsibleCard {
	dashboardTitle: string;
	id: string;
	openCardId: string | null;
	setOpenCardId: (id: string | null) => void;
}
