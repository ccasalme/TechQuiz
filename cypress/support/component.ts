import { mount } from 'cypress/react18';
import './commands';

Cypress.Commands.add('mount', mount); // ✅ Ensures Cypress recognizes mount()
