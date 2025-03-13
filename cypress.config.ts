import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // ✅ explicitly define Vite for React
    },
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}', // ✅ Ensures Cypress finds component tests
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
  },
});
