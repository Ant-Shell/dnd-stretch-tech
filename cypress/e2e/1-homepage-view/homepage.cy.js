/// <reference types="cypress" />

describe('Dungeons and Documents!!! Kill all those classs\'', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
  
    it('displays the main page with a consistent phrasing' , () => {
        cy.contains('h3', 'This is the Character Creator.')
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
        .get('.party-member').should('contain', 'INT: 050')
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
})