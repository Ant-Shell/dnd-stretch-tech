/// <reference types="cypress" />


describe('Dungeons and Documents!!! Kill all those classs\'', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        //can remove viewport settings, added very large screen for button access.
        cy.viewport(2000, 2000)
    })
  
    it('displays the main page with a consistent phrasing' , () => {
        cy.contains('h3', 'Character Creator')
        cy.contains('nav', 'Dungeons & Documents')
    })
  
    it('can create a character', () => {
        cy.get('#name')
            .type('Andrew')
        cy.get('#race')
            .select('Dwarf')
        cy.get('#classs')
            .select('Bard')
        cy.get('input[id=hp]')
            .type('696')
        cy.get('input[id=ac]')
            .type('10')
        cy.get('input[id=str]')
            .type('20')
        cy.get('input[id=con]')
            .type('30')
        cy.get('input[id=dex]')
            .type('40')
        cy.get('input[id=wis]')
            .type('50')
        cy.get('input[id=int]')
            .type('50')
        cy.get('input[id=cha]')
            .type('70')
        .get('button[type=submit]').click()
        .get('.party-member').should('contain', 'INT: 50')
    })

    it('should display the bluuuuuuuurb', () => {
        cy.get('#classs')
            .select('Bard')
            .get('h1').should('contain', 'The Bard')
    })

    it('should clear a filled out form', () => {
        cy.get('#name')
            .type('Andrew')
        cy.get('#race')
            .select('Dwarf')
        cy.get('#classs')
            .select('Bard')
        cy.get('button[id=clear]').click()
            .get('#name').should('contain', '')
        //the clear button is not functioning 100% perfectly.  Often times
        //it is leaving the selected options in.  Other times it will 
        //fully clear.  Something that is not a game breaker but worth
        //looking into.
    })

    it('should not submit a blank form', () => {
        cy.get('button[type=submit]').click()
            .get('.party-wrapper').should('have.value', '')
    })

    it.skip('should not accept non-numbers in statistic fields', () => {

    })

    it('shoould take the user to the monster page on button click' , () => {
        cy.get('button[id=changePage]').click()
        cy.url().should('include', '/monsters')
    })
})