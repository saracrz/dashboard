export type IDashboards = {
	displayName: string;
	id: string;
};

export type TVisualization = {
	name: string;
};

export type TMap = {
	name: string;
};

export interface IDashboardItem {
	id: string;
	visualization?: TVisualization;
	map?: TMap;
	text?: string;
}

export interface IDashboard {
	displayName: string;
	dashboardItems: IDashboardItem[] | null;
	id: string;
}
