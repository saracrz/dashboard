describe("The Dashboard Page", () => {
	it("successfully loads every Dashboard", () => {
		cy.visit("/");
		cy.findByText("Antenatal Care").should("be.visible");
		cy.findByText("Cases Malaria").should("be.visible");
		cy.findByText("Delivery").should("be.visible");
		cy.findByText("Disease Surveillance").should("be.visible");
		cy.findByText("Immunization").should("be.visible");
	});
});
