// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js

Cypress.Commands.add('firstLanguage', () => {
  // Espera a que el menú esté disponible antes de interactuar
    cy.wait(2000);
    cy.get('div[data-ui-id="language-switcher"]').contains('PL').click();
    cy.wait(2000);
    cy.get('ul[class="dropdown switcher-dropdown"]').eq(0).click();
    cy.wait(2000);
  });