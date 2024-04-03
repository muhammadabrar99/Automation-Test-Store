/// <refremce types="cypress" />

describe("Test suites for Automation Web Store contact us form", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href$='contact']").click();
    // confirm if redirected to the correct page
    cy.url().should("include", "contact");
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("example@abc.com");
    cy.get("#ContactUsFrm_enquiry").type("Do you provide free shipping?");
    cy.get("button[title='Submit']").click();
    // Check if form is successfully submitted
    cy.get(".maintext").find("i").should("have.class", "fa fa-thumbs-up");
  });
});
