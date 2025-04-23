describe("Speed Game", () => {
  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
  });

  it("should complete the speed game", () => {
    cy.get('a.link[href="/speedGame"]').click();
    cy.get('button.form_btn.add[data-testid="startBtn"]').click();
    cy.get("button.form_btn.delete", { timeout: 10010 })
      .should("be.visible")
      .click();

    cy.get('p.success_message[data-testid="message"]')
      .should("be.visible")
      .and("contain", "Success");
  });
});
