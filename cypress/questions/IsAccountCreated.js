export class IsAccountCreated {
    static successMessage() {
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    }
  }
  