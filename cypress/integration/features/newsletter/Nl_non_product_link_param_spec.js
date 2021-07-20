import Nl_helper from '../../../support/helpers/Nl_helper';
import Nl_template_PO from '../../../support/pageObjects/Nl_template_PO';
/// <reference types="Cypress" />

describe('Check tracking parameters for non-product links', () => {
    /** @type {Nl_helper} */
    const nl_helper = new Nl_helper();

    /** @type {object} */
    const nl_url_list = nl_helper.getTestData('nl_urls.json');

    // Ignore errors from the site itself
    Cypress.on('uncaught:exception', () => {
        return false;
    });


    it('C962349 Check if utm_campaign value of all non product links is the same, url: ', () => {


        nl_url_list.forEach((links) => {
            cy.log(links.name)

            //open nl
            cy.visit(links.url)

            cy.verifyingValues('utm_campaign')
        })
    });

    it('C955682 Check if wpset value of all non product links is the same, url: ', () => {

        nl_url_list.forEach((links) => {
            cy.log(links.name)

            //open nl
            cy.visit(links.url);

            cy.verifyingValues('wpset')
        })

    });
});
