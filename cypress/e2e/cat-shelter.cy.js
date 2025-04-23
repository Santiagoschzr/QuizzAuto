describe("Cat Shelter", () => {
  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
    cy.get(":nth-child(4) > .sub_list > :nth-child(3) > span > .link").click();
  });

  it("should add cats and assign homes", () => {
    cy.fixture("cats.json").then((cats) => {
      cy.get(".cat_shelter_header > .link_btn").click();
      cy.get(".list_form > :nth-child(1)").type(cats[0].name);
      cy.get(".list_form > .description").type(cats[0].description);
      if (cats[0].Outdoors) {
        cy.get(":nth-child(1) > label > input").click();
      } else {
        cy.get(":nth-child(2) > label > input").click();
      }
      cy.get(".text-center > .form_btn").click();
      cy.wait(100);
      cy.get(".cat_shelter_header > .link_btn").click();
      cy.get(".list_form > :nth-child(1)").type(cats[1].name);
      cy.get(".list_form > .description").type(cats[1].description);
      if (cats[1].Outdoors) {
        cy.get(":nth-child(1) > label > input").click();
      } else {
        cy.get(".go_out_or_not > :nth-child(2) > label > input");
      }
      cy.get(".text-center > .form_btn").click();

      cy.contains(cats[0].name)
        .parent()
        .find(".new_home")
        .click()
        .should("have.class", "found");

      cy.contains(cats[1].name)
        .parent()
        .find(".new_home")
        .click()
        .should("have.class", "found");
    });
  });
});
