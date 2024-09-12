const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  retries: 1,
  defaultCommandTimeout: 10000, // Incrementa el tiempo de espera por comando
  pageLoadTimeout: 60000, // Incrementa el tiempo de espera de carga de página
  numTestsKeptInMemory: 1, // Reduce el número de pruebas mantenidas en memoria
  experimentalMemoryManagement: true, // Habilita el manejo experimental de memoria
  fixturesFolder: 'cypress/fixtures',
  supportFolder: 'cypress/support',
  e2e: {
    baseUrl: 'https://demo-magento-2.auroracreation.com/customer/account/create/',
    specPattern: 'cypress/integration/**/*.cy.js',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
