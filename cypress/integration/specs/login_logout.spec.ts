describe('Login/logout test', () => {

    it('Successful login test', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));

        cy.get('#profile > .avatar-block').click();
        const userName = Cypress.env('usar').replace('.', "-");
        cy.get('.user-nicename').contains(userName);
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.equal('@' + userName);
        });

        // assert avatar's name in 'alt' attribute
        const name = Cypress.env('usar').replace('.', " ");
        cy.get('#item-header-avatar img').should((elem) => {
            expect(elem.attr('alt').toLowerCase()).to.contain(name);
        });

        // assert name in breadcrumb link
        cy.get('.breadcrumb-extra span[class="active"]').should((elem) => {
            expect(elem.text().toLowerCase()).to.equal(name);
        });
    });

    it('Logout test', () => {
        cy.get('.logout-button > a').click();
        cy.get('#error-page a').click();

        // assert login form exists and assert its elements
        cy.get('#login').should('exist');
        cy.get('.headLabel').should('have.text', 'Single sign on service');
        cy.get('.commentLabel').should('have.text', 'Use your domain username and password');
        cy.get('#username').should('have.class', 'required').and('have.attr', 'placeholder', 'Username');
        cy.get('#password').should('have.class', 'required').and('have.attr', 'placeholder', 'Password');
        cy.get('.btn-submit').invoke('val').should('eq', 'Login');
    });

    it('Failed login test', () => {
        cy.login('username', 'password');

        // assert login form exists and assert error message
        cy.get('#login').should('exist');
        cy.get('#login > form > #msg').should('have.text', 'Invalid credentials').and('have.class', 'errors');
    });
});