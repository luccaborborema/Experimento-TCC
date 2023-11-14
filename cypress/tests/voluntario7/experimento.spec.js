describe("Experimento voluntario", () => {
  context("Caso teste 1", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com/dynamic_loading");
      cy.get("div.large-12 a:first").click()
      cy.get("button").click()
      cy.wait(5000)
      cy.get("div#finish").should("be.visible")
    });
  });
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("input#username").type("tomsmith")
      cy.get("input#password").type("SuperSecretPassword!")
      cy.get("button").click()
      cy.get("div.success").should(("be.visible"))
    });
  });
  context("Caso teste 3", () => {
    it("Redirect Link", () => {
      cy.visit("https://the-internet.herokuapp.com/redirector");
      cy.get("a#redirect").click()
      cy.url().should('be.equal', 'https://the-internet.herokuapp.com/status_codes')
    });
  });
  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
      cy.contains("Click for JS Confirm").click()
      cy.contains("You clicked: Ok")
    });
  });
});
