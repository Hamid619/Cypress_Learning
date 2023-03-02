// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 ///<reference types="Cypress" />
/// <reference types= 'cypress-xpath' />


// cypress.Commands.add('getIframe' , (iframe) =>{
//     return cy.get(iframe)                                     // Getting iFrame
//     .its('0.contentDocument.body')                            // Diging into Document
//     .should('be.visible')                                     // Checking
//     .then(cy.wrap); 

// })


// Custom Command for Clicking on Link
import cy from "cypress";
// cy.Commands.add('clickLink' , (label) => {
//     cy.get('a').contains(label).click();
// })
//


// cy.Commands.add('clickLink', (label) => {
//     cy.get('a').contains(label).click();
// })