/// <reference types="cypress" />

describe('Testes para aa home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar conter o nome gian', () => {
        cy.get('.sc-iAEyYk').should('contain.text', 'Maria')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Douglas')
        cy.get('[type="email"]').type('douglas@gmail.com')
        cy.get('[type="tel"]').type('4199665544')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk').should('contain.text', 'Douglas')
    })

    it('Deve alterar o nome do segundo contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Jose')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk').should('contain.text', 'Jose')
    })

    it('Deve excluir um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('h2').should('contain.text', '4')
    })
})