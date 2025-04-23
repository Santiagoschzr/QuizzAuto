describe("Yellow or Blue", () => {
  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
  });

  it("should select the correct color", () => {
    cy.get(":nth-child(3) > .sub_list > :nth-child(1) > span > .link").click();
    cy.get(".form_btn").click();

    cy.get(".color").then((color) => {
      const colorText = color[0].innerText.toLowerCase();
      if (colorText === "yellow") {
        cy.get(".yellow").click();
      } else if (colorText === "blue") {
        cy.get(".blue").click();
      }
    });

    cy.get('p.success_message[data-testid="message"]')
      .should("be.visible")
      .and("contain", "Success");
  });
});
