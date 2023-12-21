/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
    drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    visit(
      originalFn: CommandOriginalFn,
      url: string,
      options: Partial<VisitOptions>,
    ): Chainable<Element>
  }
}

// -- This is a child command --
Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=q]').type(query).parent('form').submit()
})

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
