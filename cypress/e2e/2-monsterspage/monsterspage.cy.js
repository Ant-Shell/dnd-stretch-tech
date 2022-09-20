/// <reference types="cypress" />

describe('Dungeons and Documents!!! Kill all those classs\'', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/dnd-stretch-tech/monsters')
        //can remove viewport settings, added very large screen for button access.
        cy.viewport(2000, 2000)
    })

    it('Should not complete fetch() if error code occurs', () => {
        cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters', {
          statusCode: 401
        })
        .get('h1[class=error-msg]').should('contain', 'No monsters available at this time!')
      })

    it('should display basic information on page load', () => {
        cy.contains('h1', 'Aboleth')
        cy.contains('h2[class=stat-title]', 'Aboleth Stats')
        cy.contains('h3', 'Amphibious')
    })

    it('should return user to main page on button click', () => {
        cy.get('button[class=view-monster-page-button]').click()
        cy.url().should('include', '/')  
    })

    it('should tell user that a monster cannot be found', () => {
        cy.get('.search-bar')
            .type('Pikachu')
        cy.get('button[class=monster-search-button]').click()
        cy.contains('span[class=search-error-message]', 'Monster not found')
    })
})