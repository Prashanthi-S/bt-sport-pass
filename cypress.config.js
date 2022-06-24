const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.btcom.digital-ref1.bt.com/sport/buy/monthly-pass/create-an-account",
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },
  "chromeWebSecurity": false
});
