describe("Unauthorized user cannot visit protected page", () => {
  it("Admin page", () => {
    cy.visit("/admin");
    cy.location("pathname").should("include", "/login");
  });

  it("Admin Blog create", () => {
    cy.visit("/admin/blog/create");
    cy.location("pathname").should("include", "/login");
  });

  it("Admin Blog Update", () => {
    cy.visit("/admin/blog/update/post-3");
    cy.location("pathname").should("include", "/login");
  });
});
