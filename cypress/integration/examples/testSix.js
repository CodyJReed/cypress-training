/// <reference types="Cypress" />;

describe("My Sixth testSuite", () => {
  it("My sixth cypress test", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then((promise) => {
      let url = promise.prop("href");
      // So long as a link is found within the domain
      // the visit() method can be applied without removing a target attribute
      cy.visit(url);
      cy.url().should("include", "index");
    });
  });
});
