describe("Sorted List", () => {
  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
    cy.get(":nth-child(4) > .sub_list > :nth-child(1) > span > .link").click();
    cy.get(".collection").then((collection) => {
      const collectionCount = collection[0].children.length;
      if (collectionCount > 0) {
        if (collectionCount === 1) {
          cy.get(".icon_btn > .fas").click();
          cy.wait(100);
        } else {
          for (let i = collectionCount; i >= 1; i--) {
            cy.get(`:nth-child(${i}) > .icon_btn > .fas`).click();
            cy.wait(100);
          }
        }
      }
    });
  });

  it("should add two new items to the list", () => {
    const item1 = "Item 1";
    const item2 = "Item 2";
    cy.get(".list_form").type(item1);
    cy.get(".form_btn").click();
    cy.wait(100);
    cy.get(".list_form").type(item2);
    cy.get(".form_btn").click();
    cy.wait(100);
    cy.get(".collection").children().should("have.length", 2);
    cy.get(".collection").children().should("contain", item1);
    cy.get(".collection").children().should("contain", item2);
  });
});
