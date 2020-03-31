import Vue from 'vue'
import Login from '../../integration/login/login_spec'

describe('Navegando a la app', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('Tiene asignado un Título', () => {
    cy.title().should('include', 'CanaryGo')
  })
})

describe('Login funciona correctamente', () => {
  // Inspeccionar las opciones de componentes en bruto
  it('Inicio de sesion', () => {
    cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
    cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')

    // we should have visible errors now
    // cy.on('window:alert')
    // .should('be.visible')
    // .and('contain', 'La contraseña introducida no es correcta')

    // and still be on the same URL
    cy.url().should('include', '/login')

  });


})
