describe("Wait Game", () => {
  beforeEach(() => {
    cy.visit("https://thelab.boozang.com");
    cy.get("button.veggie_burger").click();
  });

  it("should complete the wait game", () => {
    cy.get('a.link[href="/waitGame"]').click();
    cy.get('button.form_btn.add[data-testid="startBtn"]').click();
    cy.wait(5000);
    cy.get("button.form_btn.delete").click();
    cy.get('p.success_message[data-testid="message"]')
      .should("be.visible")
      .and("contain", "Success");
  });
});
