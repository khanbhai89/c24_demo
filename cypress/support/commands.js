import Nl_helper from './helpers/Nl_helper';

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

Cypress.Commands.add('gettingHrefUrl', (param, paramValue) => {

    cy.get(`a[href*="${param}"]`)

        .each($a => {

            const helper = new Nl_helper()
            const url = helper.getParamFromUrl($a.attr('href'));

            cy.wrap(url).its(param).should('eq', paramValue);
        });
})

Cypress.Commands.add('verifyingValues', (param) => {
    cy.get(`a[href*="${param}"]`).first()

        .then(($anchorlink) => {

            const helper = new Nl_helper()
            const anchorlinks = helper.getParamFromUrl($anchorlink.prop('href'));

            cy.gettingHrefUrl(param, anchorlinks[param])
        })
})