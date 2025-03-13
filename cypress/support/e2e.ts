// cypress/support/e2e.ts

import './commands';

// Global before hook runs once before all E2E tests.
before(() => {
  // Clear cookies, localStorage, etc., for a clean slate.
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Optional global beforeEach hook runs before every E2E test.
beforeEach(() => {
  // Set default viewport size explicitly.
  cy.viewport(1280, 720);

  // Intercept and log all API requests (for debugging clarity).
  cy.intercept('/api/**', (req) => {
    req.continue((res) => {
      console.log('Intercepted API:', req.method, req.url, res.statusCode);
    });
  });
});

// Global error handling clearly defined (optional but helpful)
Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Caught an unhandled exception:', err);
  // Return false to prevent Cypress from failing the test explicitly
  return false;
});
