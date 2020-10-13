describe("To Do List Website", () => {
  it("should display list title", () => {
    cy.visit("/");
    cy.title().should("include", "To Do List");
  });

  it("should display TETRIS BOYS on header", () => {
    cy.get(".navbar").should("have.text", "TETRIS BOYS");
  });

  describe("To Do List", () => {
    it("should have a title", () => {
      cy.get(".to-do-title").should("have.text", "Tooo-dooo List");
    });

    it("should start with 3 initial items + new item rows", () => {
      cy.get("td").should("have.length", 4);
    });

    it("should start with instruction items", () => {
      cy.get("td").first().should("have.text", "Welcome to your list");
      cy.get("td")
        .eq(1)
        .should("have.text", "Hit the + button to add a new item");
      cy.get("td").eq(2).should("have.text", "<-- Hit this to delete an item");
    });

    describe("When clicking on delete button", () => {
      beforeEach(() => {
        cy.get("td button").eq(2).click();
      });

      it("should delete an item", () => {
        cy.get("td").should("have.length", 3);
      });
    });

    it("should have a new item input", () => {
      cy.get("input").first().should("have.attr", "placeholder", "New item");
    });

    describe("When typing and clicking on + button", () => {
      const input = "Adding a new item here";
      beforeEach(() => {
        cy.get("input").click().type(input);
        cy.get("button").last().click();
      });

      it("should add new item", () => {
        cy.get("td").should("have.length", 4);
        cy.get("td").eq(2).should("have.text", input);
      });
    });
  });

  it("should have a footer", () => {
    cy.get("footer").should(
      "have.text",
      "Made with 🍩 by Fernando Rego, Lucas Ambrósio and Riei Joaquim"
    );
  });
});
