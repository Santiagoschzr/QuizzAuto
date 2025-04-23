describe("Concatenate Strings", () => {
  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
  });

  it("should concatenate the strings correctly", () => {
    cy.get(":nth-child(7) > .sub_list > li > span > .link").click();
    cy.get(".strings_section > :nth-child(2)").click();
    cy.wait(100);

    cy.get(".string1").then(($string1) => {
      const string1 = $string1.text();
      cy.get(".string2").then(($string2) => {
        const string2 = $string2.text();
        cy.get(".list_form").type(`${string1}${string2}`);
        cy.get(".text-center > .form_btn").click();
        cy.get('[data-testid="message"]').should("be.visible");
      });
    });
  });
});
