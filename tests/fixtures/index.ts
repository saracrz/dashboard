import { IDashboard, IDashboards } from "../../src/types";

export const mockedDashboards: IDashboards[] = [
	{
		displayName: "Antenatal Care",
		id: "nghVC4wtyzi",
	},
	{
		displayName: "Cases Malaria",
		id: "JW7RlN5xafN",
	},
	{
		displayName: "Delivery",
		id: "iMnYyBfSxmM",
	},
	{
		displayName: "Disease Surveillance",
		id: "vqh4MBWOTi4",
	},
	{
		displayName: "Immunization",
		id: "TAMlzYkstb7",
	},
];

export const mockedDashboardData: IDashboard = {
	displayName: "Antenatal Care",
	id: "nghVC4wtyzi",
	dashboardItems: [
		{
			visualization: {
				name: "ANC: Coverage by quarter and district (two-category)",
			},
			id: "rOehBDv4LGG",
		},
	],
};
