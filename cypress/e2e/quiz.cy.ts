describe('Quiz End-to-End Test', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
      cy.visit('/');
    });
  
    it('allows user to complete a quiz', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.wait('@getQuestions');
  
      cy.get('h2').contains('What is React?').should('exist');
      cy.get('button.btn-primary').first().click();
  
      cy.contains('Quiz Completed').should('exist');
      cy.contains('Your score: 1/1').should('exist');
    });
  });
  

 
  