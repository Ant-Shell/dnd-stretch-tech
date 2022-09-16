/// <reference types="cypress" />

describe('Dungeons and Documents!!! Kill all those classs\'', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/monsters')
        //can remove viewport settings, added very large screen for button access.
        cy.viewport(2000, 2000)
    })

    it('should display basic information on page load', () => {
        cy.contains('h1', 'Aboleth')
        cy.contains('h2[class=stat-title]', 'Aboleth Stats')
        cy.contains('h3', 'Amphibious')
    })

    it('should return user to main page on button click', () => {
        cy.get('button').click()
        cy.url().should('include', '/')  
    })
})