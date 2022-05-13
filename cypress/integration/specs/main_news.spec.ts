describe('main_news', () => {

    it('Search and navigate to main news post', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));

        cy.get('#main-hot ul').should('contain', 'Online radio 13-MAY-2022');
        cy.get('[title="Search"]').click();
        cy.searchAndNavigateToPost('radio', 'Online radio 13-MAY-2022');
        cy.get('.article-title').invoke('text').should('equal', 'Online radio 13-MAY-2022 (C.T.Co birthday)');
    });
});