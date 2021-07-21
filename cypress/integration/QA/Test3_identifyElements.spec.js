
describe('create and mark-unmark as favorite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
       
        cy.get('form').within(($form) => {

            cy.get('input[type="email"]').type('tutkuayavefe@gmail.com')
            cy.get('input[type="password"]').type('ABcd123.')
            cy.root().submit()
        })
        
 //       cy.get('input[type="email"]').type('tutkuayavefe@gmail.com')
 //       cy.get('input[type="password"]').type('ABcd123.')
 //       cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed').should('be.visible')


    })

    it('Create a post', function(){
       // cy.contains('New Post').click()
       
       cy.get('ul.navbar-nav').children().contains('New Post').click()

        cy.get('form').within(($form) => {

        cy.get('input').first().type('Title')
        cy.get('input').eq(1).type('About field')
        cy.get('textarea').last().type('article in markdown')
        cy.get('input[placeholder="Enter tags"]').type('Tag')
        cy.get('.btn').contains('Publish Article').click()
        })
        cy.url().should('include','article')


    })

    it('Mark-unmark as favorite', function(){

    //    cy.get('.nav-link').contains('tutku').click()
        cy.get('ul.navbar-nav').children().contains('tutku').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go(-1)
        //cy.go('forward')
        //cy.go(1)





    })
})