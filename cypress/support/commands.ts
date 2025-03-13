import { mount } from 'cypress/react18';  // 👈 clearly import mount!

Cypress.Commands.add('mount', mount); // ✅ no more TS screaming

Cypress.Commands.add('startQuiz', () => {
  cy.visit('/');
});

Cypress.Commands.add('answerQuestion', (answerIndex: number) => {
  cy.get('button.btn-primary').eq(answerIndex).click();
});

Cypress.Commands.add('assertSpinner', () => {
  cy.get('.spinner-border').should('exist');
});
