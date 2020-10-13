describe("To Do List", () => {
  it("should display list title", () => {
    cy.viewport("ipad-2");
    cy.visit("http://localhost:3000");
    cy.title().should("include", "To Do List");
  });
});
