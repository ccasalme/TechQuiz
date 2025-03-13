Cypress.Commands.add('mount', mount); // already defined
Cypress.Commands.add('startQuiz', () => {
  cy.visit('/');
  cy.contains('Start Quiz').click();
});

Cypress.Commands.add('answerQuestion', (answerIndex: number) => {
  cy.get('button.btn-primary').eq(answerIndex).click();
});

Cypress.Commands.add('assertSpinner', () => {
  cy.get('.spinner-border').should('exist');
});
