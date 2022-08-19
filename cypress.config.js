// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {},
  e2e: {
    baseUrl: 'http://localhost:3000',
    browser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
