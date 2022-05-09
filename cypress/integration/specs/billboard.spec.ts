describe('billboard test', () => {

    it('Compare number in Billboard item text with elements on several pages', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));

        cy.loadBillboardWithCategories();
        cy.assertElementsCountForItem('Electronics');

        cy.loadBillboardWithCategories();
        cy.assertElementsCountForItem('Food');
    });
});