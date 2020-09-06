/// <reference types="Cypress" />;

describe("My third testSuite", () => {
  it("My first cypress test", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();
    // Manually confirm auto window alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });
});
