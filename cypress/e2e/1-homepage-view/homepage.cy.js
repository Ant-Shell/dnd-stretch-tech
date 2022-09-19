/// <reference types="cypress" />


describe('Dungeons and Documents!!! Kill all those classs\'', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        //can remove viewport settings, added very large screen for button access.
        cy.viewport(2000, 2000)
    })
  
    it('displays the main page with a consistent phrasing' , () => {
        cy.contains('h3', 'Character Creator')
        cy.contains('h2', 'Hey you, stack some apples for me. Add players to your party so we can begin!')
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
    })

    it('should not submit a blank form', () => {
        cy.get('button[type=submit]').click()
            .get('.party-wrapper').should('have.value', '')
    })

    it('shoould take the user to the monster page on button click' , () => {
        cy.get('button[id=changePage]').click()
        cy.url().should('include', '/monsters')
    })

    it('should tell user that a duplicate name cannot be entered', () => {
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

        cy.get('button[id=clear]').click()

        // creating a duplicate entry below: 

        cy.get('#name')
            .type('Andrew')
        cy.get('#race')
            .select('Dwarf')
        cy.get('#classs')
            .select('Bard')
        cy.get('input[id=hp]')
            .type('453')
        cy.get('input[id=ac]')
            .type('8')
        cy.get('input[id=str]')
            .type('57')
        cy.get('input[id=con]')
            .type('12')
        cy.get('input[id=dex]')
            .type('34')
        cy.get('input[id=wis]')
            .type('23')
        cy.get('input[id=int]')
            .type('54')
        cy.get('input[id=cha]')
            .type('100')
        .get('button[type=submit]').click()

        cy.contains('span[class=name-error-message]', 'Duplicate name, try again.')
    })
})



   // cy.get('.search-bar')
        //     .type('yo momma')
        // cy.get('button[class=monster-search-button]').click()
        // cy.contains('span[class=search-error-message]', 'Monster not found')