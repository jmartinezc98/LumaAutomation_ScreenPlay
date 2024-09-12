export class Type {
    static into(selector, text) {
      cy.get(selector).type(text);
    }
  }  