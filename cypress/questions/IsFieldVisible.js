export class IsFieldVisible {
    static checkField(fieldSelector) {
      cy.get(fieldSelector).should('be.visible'); // Verifica que el campo es visible
    }
  }  