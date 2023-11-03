describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: "React Dashboard App",
		}).should("exist");
	});
});
