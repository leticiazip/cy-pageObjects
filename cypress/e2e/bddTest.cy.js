///<reference types="cypress" />

const { profilePage } = require("../support/pages/profile.page")
const { email, senha } = require('../fixtures/data.json')

context('Dado que estou na página inicial', () => {
    context('Quando eu faço login', () => {
        beforeEach(() => {
            cy.login(email, senha)
        })

        it('Então o nome do usuário deve aparecer na página de perfil', () => {
            profilePage.customerName().should('contain', 'Castilho Leticia')
        })
    })
})

// describe('Teste de Autenticação', () => {

//     it('Deve fazer o login com sucesso', () => {
//         cy.login(email, senha)
//         profilePage.customerName().should('contain', 'Castilho Leticia')
//     })
// })