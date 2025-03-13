/// <reference types="cypress" />
import { MountOptions, MountReturn } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mount(
        jsx: React.ReactNode,
        options?: MountOptions
      ): Chainable<MountReturn>;

      startQuiz(): Chainable<void>;
      answerQuestion(answerIndex: number): Chainable<void>;
      assertSpinner(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
