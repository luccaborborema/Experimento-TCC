describe("Experimento voluntario", () => {
  const BASE_URL = "https://the-internet.herokuapp.com/";
  const goToPage = (path) => {
    cy.visit(`${BASE_URL}/${path}`);
  };

  const typeAndLogin = (username, password) => {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get(".radius").contains("Login").click();
  };

  context("On Dynamic Loading page", () => {
    beforeEach(() => {
      goToPage("dynamic_loading");
      cy.get("a").contains("Example 1").click();
      cy.url().should("include", "/dynamic_loading/1");
    });

    it("clicks the Start button, then the 'Hello World!' message should become visible after loading", () => {
      const LOADING_TIME = 3000;

      cy.get("button").contains("Start").click();
      cy.wait(LOADING_TIME);
      cy.contains("Hello World!").should("be.visible");
    });
  });
  context("On Form Authentication page", () => {
    it("types login info and successfully logins into a secure area", () => {
      goToPage("login");
      typeAndLogin("tomsmith", "SuperSecretPassword!");
      cy.get("#flash.flash.success").should(
        "contain",
        "You logged into a secure area!"
      );
    });
  });
  context("On Download File page", () => {
    it("downloads a file successfully", () => {
      goToPage("download");
      cy.window()
        .document()
        .then((doc) => {
          doc.addEventListener("click", () => {
            setTimeout(() => doc.location.reload(), 300);
          });
          cy.get("a").contains("Test.txt").click();
        });
      cy.readFile("cypress/downloads/Test.txt");
    });
  });
  context("On JavaScript Alerts page", () => {
    it("clicks the JS Confirm button and clicks 'Ok' in the alert and the text should be You clicked: Ok", () => {
      goToPage("javascript_alerts");
      cy.get("button").contains("Click for JS Confirm").click();
      cy.on("window:alert", (text) => {
        expect(text).to.eq("I am a JS Confirm");
        done();
      });
      cy.get("#result")
        .should("have.text", "You clicked: Ok")
        .should("have.css", "color", "rgb(0, 128, 0)");
    });
  });
});
