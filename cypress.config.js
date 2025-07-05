
const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  responseTimeout: 10000,
  viewportHeight: 960,
  viewportWidth: 1536,
  watchForFileChanges: false,
  video: true,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber()) 
    },
    specPattern: "cypress/e2e/**/*.{feature,js}"
  },
});

