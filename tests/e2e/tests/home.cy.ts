describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: "React App",
		}).should("exist");
	});
});
