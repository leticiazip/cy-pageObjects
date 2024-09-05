///<reference types="cypress" />

import { profilePage } from "../support/pages/profile.page"
const { email, senha } = require('../fixtures/data.json')

describe('Teste de Autenticação', () => {

    it('Deve fazer o login com sucesso', () => {
        cy.login(email, senha)
        profilePage.customerName().should('contain', 'Castilho Leticia')
    })
})