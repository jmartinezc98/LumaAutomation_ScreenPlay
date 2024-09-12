export class Click {
    static on(selector) {
      cy.get(selector).click();
    }
  }  