describe("Form Fill", () => {
  Cypress.Commands.add("fillForm", (formData) => {
    cy.get(".list_form").click();
    cy.get(".list_form > :nth-child(1)").type(formData.name);
    cy.get(".list_form > :nth-child(2)").type(formData.lastname);
    cy.get(".list_form > :nth-child(3)").type(formData.email);
    cy.get(".list_form > :nth-child(4)").type(formData.password);
    cy.get(".btn_section > .form_btn").click();
    cy.get(".save_message").should("be.visible");
  });

  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
    cy.get(":nth-child(4) > .sub_list > :nth-child(2) > span > .link").click();
  });

  it("should fill the form with fixture data and verify both objects were added", () => {
    cy.fixture("formData.json").then((formData) => {
      cy.fillForm(formData[0]);

      cy.fillForm(formData[1]);

      cy.get(".orange").click();
      formData.forEach((data) => {
        cy.get(".print_form").should("contain", data.name);
        cy.get(".print_form").should("contain", data.email);
      });
    });
  });
});
