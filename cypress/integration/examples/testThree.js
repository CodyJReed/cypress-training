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
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "index");
    cy.go("back");
  });
});
