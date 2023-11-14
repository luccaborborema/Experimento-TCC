describe("Experimento voluntario", () => {
  context("Caso teste 1", () => {
    it("Dynamic Loading - Example 1", () => {
      // Visitar a página de Dynamic Loading
      cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
      // Clicar no botão "Start"
      cy.get("#start button").click();
      // Esperar até que a barra de loading não esteja mais visível
      cy.get("#loading").should("not.be.visible");
      // Verificar se a mensagem "Hello World!" está visível
      cy.get("#finish h4")
        .should("be.visible")
        .and("have.text", "Hello World!");
    });
  });
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      // Visitar a página de Form Authentication
      cy.visit("https://the-internet.herokuapp.com/login");
      // Digitar o nome de usuário
      cy.get("#username").type("tomsmith");
      // Digitar a senha
      cy.get("#password").type("SuperSecretPassword!");
      // Clicar no botão "Login"
      cy.get("form#login").submit();
      // Verificar se o aviso "You logged into a secure area!" aparece
      cy.get("#flash-messages").should(
        "contain.text",
        "You logged into a secure area!"
      );
    });
  });
  context("Caso teste 3", () => {
    it("Redirect Link", () => {
      // Visitar a página inicial
      cy.visit("https://the-internet.herokuapp.com/");
      // Encontrar o link para Redirect Link e clicar nele
      cy.contains("Redirect Link").click();
      // Clicar no link "here" para disparar o redirecionamento
      cy.get("#redirect").click();
      // Verificar se a URL da página é a de Status Codes
      cy.url().should("include", "/status_codes");
    });
  });
  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
      // Clique no botão "Click for JS Confirm"
      cy.contains("Click for JS Confirm").click();
      // Lide com o alerta clicando em "Ok"
      cy.on("window:confirm", () => true);
      // Verifique se o texto "You clicked: Ok" aparece na tela
      cy.get("#result").should("have.text", "You clicked: Ok");
    });
  });
});
