describe('billboard test', () => {

    it('Compare number in Billboard item text with elements on several pages', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));

        cy.loadBillboard();
        cy.assertElementsCountForItem('Electronics');

        cy.loadBillboard();
        cy.assertElementsCountForItem('Food');
    });
});