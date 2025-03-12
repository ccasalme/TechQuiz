import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Adjust this to the URL of your local or dev server
  },

  // Include any other configuration options that are relevant to your project
});
