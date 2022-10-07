const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1600,
  viewportHeight: 900,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false
});
