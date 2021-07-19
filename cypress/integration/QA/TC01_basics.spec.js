describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('tutkuayavefe@gmail.com')
        cy.get('input[type="password"]').type('ABcd123.')
     //   cy.get('input[type="submit"]').contains('Sign in').click()
        cy.get('.btn').contains('Sign in').should('be.visible').click()


    })
})



