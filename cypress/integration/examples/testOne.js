/// <reference types="Cypress" />;

describe("My first testSuite", () => {
  it("My first cypress test", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();

    cy.get("@productLocator")
      .find(".product")
      .each(($product, index, $list) => {
        const textVeg = $product.find("h4.product-name").text();
        textVeg.includes("Cashews") && $product.find("button").click();
      });
    // Assert whether logo text is displayed properly
    cy.get(".brand").should("have.text", "GREENKART");
    // Print in logs
    cy.get(".brand").then((logo) => cy.log(logo.text()));
  });
});
