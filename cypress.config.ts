import { defineConfig } from 'cypress';

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on: any) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});