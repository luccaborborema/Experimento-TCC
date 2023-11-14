describe("Experimento voluntario", () => {
  context("Caso teste 1", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com/dynamic_loading");
      cy.get('[href="/dynamic_loading/1"]').click();
      cy.get("button").click();
      cy.wait(6000);

      cy.contains("Hello World!");
    });
  });
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get(".radius").click();
      cy.contains("You logged into a secure area!");
    });
  });
  context("Caso teste 3", () => {
    it.only("Download File", () => {
      cy.visit("https://the-internet.herokuapp.com/download");
      cy.window()
        .document()
        .then(function (doc) {
          doc.addEventListener("click", () => {
            setTimeout(function () {
              doc.location.reload();
            }, 300);
          });
          cy.get('[href="download/test.txt"]').click();
        });
      cy.readFile("cypress/downloads/test.txt");
    });
  });
  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
      cy.get(":nth-child(2) > button").click();
      cy.contains("You clicked: Ok");
    });
  });
});
