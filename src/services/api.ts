import { IDashboard } from "../types";

export type TDashboardsData = {
	dashboards: IDashboard[];
};

export const getDashboards = async (): Promise<IDashboard[]> => {
	const response = await fetch(
		"https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json"
	);

	if (response.ok) {
		const data = (await response.json()) as TDashboardsData;

		return data.dashboards;
	}

	throw new Error("Failed to fetch data.");
};

export const getDashboardDetails = async (id: string): Promise<IDashboard> => {
	const response = await fetch(
		`https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/${id}.json`
	);

	if (response.ok) {
		const data = (await response.json()) as IDashboard;

		return data;
	}

	throw new Error("Failed to fetch data.");
};
