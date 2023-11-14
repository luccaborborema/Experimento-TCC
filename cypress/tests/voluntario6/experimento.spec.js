describe("Experimento voluntario", () => {
  context("Caso teste 1", () => {
    it('Loads hidden element after clicking the "Start" button', () => {
      cy.visit("https://the-internet.herokuapp.com/");

      cy.contains("Dynamic Loading").click();

      cy.contains("Example 1: Element on page that is hidden").click();

      cy.get("#start").should("be.visible");

      cy.contains("Start").click();

      cy.wait(5000);

      cy.get("#finish").should("contain", "Hello World!");
    });
  });
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/");

      cy.contains("Form Authentication").click();

      cy.get("#username").type("tomsmith");

      cy.get("#password").type("SuperSecretPassword!");

      cy.get(".radius").click();

      cy.contains("You logged into a secure area!");
    });
  });
  context("Caso teste 3", () => {
    it("Redirect Link", () => {
      cy.visit("https://the-internet.herokuapp.com/");

      cy.contains("Redirect Link").click();

      cy.contains("here").click();

      cy.contains("Status Codes");
    });
  });
  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/");

      cy.contains("JavaScript Alerts").click();

      cy.contains("Click for JS Confirm").click();

      cy.contains("You clicked: Ok");
    });
  });
});
