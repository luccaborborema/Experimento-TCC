describe("Experimento voluntario", () => {
    context("Caso teste 1", () => {
      it("Dynamic Loading", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Dynamic Loading').click()
        cy.contains('Example 1: Element on page that is hidden').click()
        cy.contains('Start').click()
        cy.contains('Hello World!').should('be.visible')
      });
    });
    context("Caso teste 2", () => {
      it    ("Form Authentication", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Form Authentication').click()
        cy.get('input#username').type('tomsmith')
        cy.get('input#password').type('SuperSecretPassword!')
        cy.get('button').click()
        cy.contains('You logged into a secure area!').should('be.visible')
      });
    });
    context("Caso teste 3", () => {
      it("Redirect Link", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Redirect Link').click()
        cy.contains('here').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes')
      });
    });
    context("Caso teste 4", () => {
      it("JavaScript Alerts", () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('JavaScript Alerts').click()
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function(){
            return true;
        });
        cy.contains('You clicked: Ok').should('be.visible')
      });
    });
});