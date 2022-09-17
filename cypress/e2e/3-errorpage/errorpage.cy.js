/// <reference types="cypress" />

describe('Error page test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/asdf')
    })

    it('should display an encouraging message despite a happy accident' , () => {
        cy.contains('h1', 'Oh no! You seem to have taken a wrong turn along your quest. Please return home!')
    })

    it('should give a button option to return to the character creation page', () => {
        cy.get('button[class=return-home-button]').click()
        cy.url().should('include', '/')
    })
})