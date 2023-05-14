const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 100000,
  requestTimeout: 100000,
  pageLoadTimeout: 200000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: "https://rahulshettyacademy.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
  },
});
