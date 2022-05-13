describe('tools_linksCount', () => {

    it('Assert count of links inside Tools dropdown', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));

        cy.contains('Tools').trigger('mouseover').find('+ ul > li')
            .should('be.visible').and('have.length', 14);
    });
});