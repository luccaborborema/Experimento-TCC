describe("Experimento voluntario", () => {
    context("Caso teste 1", () => {
      it("Dynamic Loading", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("a","Dynamic Loading").click()
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.contains("button","Start").click()
        cy.wait(5000)
        cy.contains("Hello World!").should("be.visible")
      });
    });
    context("Caso teste 2", () => {
      it("Form Authentication", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("a","Form Authentication").click()
        cy.get("input#username").type("tomsmith")
        cy.get("input#password").type("SuperSecretPassword!")
        cy.get("button").click()
        cy.contains("You logged into a secure area!").should("exist").should("be.visible")
      });
    });
    context("Caso teste 3", () => {
      it("Redirect Link", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("a","Redirect Link").click()
        cy.get("a#redirect").click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes')
      });
    });
    context("Caso teste 4", () => {
      it.only("JavaScript Alerts", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("a","JavaScript Alerts").click()
        cy.contains("Click for JS Confirm").click()
        cy.on('window:confirm', (text) => {
            return true;
        });
        cy.contains("p#result","You clicked: Ok").should("exist").should("be.visible")
      });
    });
});
