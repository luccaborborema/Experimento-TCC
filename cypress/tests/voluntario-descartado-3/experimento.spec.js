describe("Experimento voluntario", () => {
  
  context("Caso teste 1", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.get('[href="/dynamic_loading"]').click();
      cy.contains("Example 1: Element on page that is hidden").click();
      cy.get("#start button").click();
      cy.wait(5000);
      cy.get("#finish")
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.eq("Hello World!")});
    });
  });
  
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.get('[href="/login"]').click();
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("button[type='submit']").click();
      cy.contains("You logged into a secure area!").should("be.visible");
    });
  });

  context("Caso teste 3", () => {
    it("Download File", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.get('[href="/download"]').click();
      cy.window().document().then(function (doc) {
          doc.addEventListener("click", () => {
            setTimeout(function () {doc.location.reload();}, 300);
          });
      cy.get('[href="download/test.txt"]').click();
      });
      cy.readFile("cypress/downloads/test.txt");
    });
  });

  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/");
      cy.get('[href="/javascript_alerts"]').click();
      cy.contains("Click for JS Confirm").click();
      cy.on("window:confirm", (str) => {
        expect(str).to.equal("I am a JS Confirm");
        return true;
      });
      cy.get("#result").should("have.text", "You clicked: Ok");
    });
  });
});