describe("Experimento voluntario", () => {
  context("O usuário está na página de Dynamic Loading", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com");
      cy.contains("Dynamic Loading").click();
      cy.contains("Example 1: Element on page that is hidden").click();
      cy.contains("Start").click();
      cy.contains("Hello World!",{ timeout: 30000 }).should("be.visible");
    });
  });
  context("O usuário está na página de Form Authentication  ", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.contains("Form Authentication").click();
      cy.get("input[name=username]").type("tomsmith");
      cy.get("input[name=password]").type("SuperSecretPassword!");
      cy.get("button").click();
      cy.contains("You logged into a secure area!").should("be.visible");
    });
  });
  context("O usuário está na página Redirect Link", () => {
    it("Redirect Link", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.contains("Redirect Link").click();
      cy.contains("here").click();
      cy.contains("Status Codes").should("be.visible");
    });
  });
  context("O usuário está na página de JavaScript Alerts", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.contains("JavaScript Alerts").click();
      cy.contains("Click for JS Confirm").click();
      cy.contains("Ok").click();
      cy.contains("You clicked: Ok").should("be.visible");
    });
  });
});
