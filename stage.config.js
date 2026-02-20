const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'E2E REPORT',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  allowCypressEnv: true,
  env: {
      userName: "neetu",
      password: "Neetu@123",
    },

  e2e: {
    
    baseUrl: "https://www.testproai.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});

console.log(module.exports);