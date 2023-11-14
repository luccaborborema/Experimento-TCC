describe('Experimento voluntario', () => {
  context('Caso teste 1', () => {
    it('Dynamic Loading', () => {
      cy.visit('http://the-internet.herokuapp.com/dynamic_loading');
      cy.get('.example > a')
        .contains('Example 1: Element on page that is hidden')
        .click();
      cy.get('#start > button').click();
      cy.get('#finish')
        .wait(6000)
        .should('be.visible')
        .should('include.text', 'Hello World!');
    });
  });

  context('Caso teste 2', () => {
    it('Form Authentication', () => {
      cy.visit('http://the-internet.herokuapp.com/login');
      cy.get('input[name=username]').type('tomsmith');
      cy.get('input[name=password]').type('SuperSecretPassword!');
      cy.get('button[type=submit]').click();
      cy.contains('You logged into a secure area!').should('be.visible');
    });
  });

  context('Caso teste 3', () => {
    it('Redirect Link', () => {
      cy.visit('https://the-internet.herokuapp.com/redirector');
      cy.get('a').contains('here').click();
      cy.url().should(
        'match',
        /https?:\/\/the-internet.herokuapp.com\/status_codes/
      );
      cy.contains('Status Codes').should('be.visible');
    });
  });

  context('Caso teste 4', () => {
    it('JavaScript Alerts', () => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
      cy.get('button').contains('Click for JS Confirm').click();
      cy.contains('You clicked: Ok').should('be.visible');
    });
  });
});
