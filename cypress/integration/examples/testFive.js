/// <reference types="Cypress" />;

describe("My Fifth testSuite", () => {
  it("My fifth cypress test", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get(".mouse-hover-content").invoke("show");
    // force hidden element click event
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
