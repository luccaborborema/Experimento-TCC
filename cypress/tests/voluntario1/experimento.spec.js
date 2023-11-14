describe("Experimento voluntario", () => {
  context("Caso teste 1", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com/dynamic_loading/2");
      cy.contains("Start").click();
      cy.wait(7000);
      cy.contains("Hello World!");
    });
  });
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("input#username").type("tomsmith");
      cy.get("input#password").type("SuperSecretPassword!");
      cy.get("button").contains("Login").click();
      cy.contains("Secure");
    });
  });
  context("Caso teste 3", () => {
    it("Redirect Link", () => {
      cy.visit("https://the-internet.herokuapp.com/redirector");
      cy.get("a").contains("here").click();
      cy.get("a").contains("200").click();
      cy.contains("200");
      cy.get("a").contains("here").click();

      cy.get("a").contains("301").click();
      cy.contains("301");
      cy.get("a").contains("here").click();

      cy.get("a").contains("404").click();
      cy.contains("404");
      cy.get("a").contains("here").click();

      cy.get("a").contains("500").click();
      cy.contains("500");
      cy.get("a").contains("here").click();
    });
  });
  context("Caso teste 4", () => {
    it.only("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      cy.get("button").contains("Alert").click();
      cy.get("p#result").contains("You successfully clicked an alert");

      cy.get("button").contains("Confirm").click();
      cy.get("p#result").contains("You clicked: Ok");

      cy.window().then((win) => {
        cy.stub(win, "prompt").returns("123");
      });
      cy.get("button[onclick='jsPrompt()']").click();
      cy.get("p#result").contains("You entered: 123");
      
    });
  });
});
