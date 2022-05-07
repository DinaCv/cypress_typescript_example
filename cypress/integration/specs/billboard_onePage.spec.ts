describe('billboard_onePage test', () => {

    it('Compare number in Billboard item text with elements on one page', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));

        // click on Billboard and wait for its load
        cy.get('[title="Billboard"]').click();
        cy.get('.products').should('exist');

        // get "Food" item's text and extract digit from it
        cy.get('li:contains("Food")').as('group');
        cy.get('@group')
            .find('.count').then(($el) => {
            cy.wrap($el.text().replace(' Products', ''));
        })
            .as('itemText');

        // click on "Food" item and wait for its load
        cy.get('@group').click();
        cy.get('.products').should('exist');

        // get length of elements on the screen, convert this number to string
        // and compare with extracted digit of "Food" item's text
        cy.get('.products > li').its('length')
            .then((len) => {
                const itemsCount = len.toString();
                cy.get('@itemText').then((itemText) => {
                    expect(itemText).equal(itemsCount);
                });
            });
    });
});