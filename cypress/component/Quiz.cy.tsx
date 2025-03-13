import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders Start Quiz button', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('renders spinner after clicking Start Quiz', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.spinner-border').should('exist');
  });
});
