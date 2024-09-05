///<reference types="cypress" />

import { homePage } from "../support/pages/home.page"
import loginPage from "../support/pages/login.page"
import { profilePage } from "../support/pages/profile.page"
const { email, senha } = require('../fixtures/data.json')

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve fazer o login com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    homePage.openMenu('Account')
    profilePage.customerName().should('contain', 'Castilho Leticia')
  })
})