/* eslint-disable no-undef */
/// //////////// SPANISH CHECK ////////////////
describe('ESPAÑOL', () => {
  describe('Navegando a la app', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Tiene asignado un Título', () => {
      cy.title().should('include', 'CanaryGo')
    })
  })

  /// ////////////////////////////
  describe('Menu funciona correctamente', () => {
    it('Al desplegar se muestra correctamente', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('.q-drawer__content').contains('Inicio')
          cy.get('.q-drawer__content').contains('¿Qué ofrecemos?')
          cy.get('.q-drawer__content').contains('Iniciar sesión')
          cy.get('.q-drawer__content').contains('Encuentra lo que buscas')
          cy.get('.q-drawer__content').contains('Registro')
          cy.get('.q-drawer__content').contains('Comienza tu aventura')
          cy.get('.q-drawer__content').contains('Modo oscuro')
          cy.get('.q-drawer__content').contains('Activa o desactiva el modo oscuro')
        })
    })

    it('Al pulsar en el toggle cambia a modo oscuro', () => {
      cy.get('.q-drawer__content > :nth-child(2)').click()
        .then(() => {
          cy.get('.q-drawer__content').should('have.css', 'background-color')
            .and('eq', 'rgba(0, 0, 0, 0)')
        })
    })
  })

  describe('Menu redirige a Inicio', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Redirige a Inicio', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('[href="/home"]').click()
          cy.url().should('include', '/home')
        })
    })
    it('Redirige a Login', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('[href="/login"]').click()
          cy.url().should('include', '/login')
        })
    })
    it('Redirige a SignUp', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('[href="/signup"]').click()
          cy.url().should('include', '/signup')
        })
    })
  })
})

/// //////////// ENGLISH CHECK ////////////////
describe('ENGLISH', () => {
  describe('Navigating to the app', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Has a Title assigned', () => {
      cy.title().should('include', 'CanaryGo')
    })

    it('The language is changed', () => {
      cy.get('.language > .q-field > .q-field__inner > .q-field__control > .q-field__control-container').click()
      cy.get('.q-virtual-scroll__content > :nth-child(2) > .q-item__section > .q-item__label').click()
        .then(() => {
          cy.get('.language > .q-field > .q-field__inner > .q-field__control > .q-field__control-container').contains('English')
        })
    })
  })

  /// ////////////////////////////
  describe('Menu works well', () => {
    it('When displayed, the menu is displayed correctly', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('.q-drawer__content').contains('Introduction')
          cy.get('.q-drawer__content').contains('What we offer')
          cy.get('.q-drawer__content').contains('Log in')
          cy.get('.q-drawer__content').contains('Find what you want')
          cy.get('.q-drawer__content').contains('Sign up')
          cy.get('.q-drawer__content').contains('Your adventure begins')
          cy.get('.q-drawer__content').contains('Dark mode')
          cy.get('.q-drawer__content').contains('Turn dark mode on or off')
        })
    })

    it('Clicking on the toggle switches to dark mode', () => {
      cy.get('.q-drawer__content > :nth-child(2)').click()
        .then(() => {
          cy.get('.q-drawer__content').should('have.css', 'background-color')
            .and('eq', 'rgba(0, 0, 0, 0)')
        })
    })
  })

  describe('Menu redirects', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Menu redirects to Home', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('[href="/home"]').click()
          cy.url().should('include', '/home')
        })
    })
    it('Menu redirects to Login', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('[href="/login"]').click()
          cy.url().should('include', '/login')
        })
    })
    it('Menu redirects to SignUp', () => {
      cy.get('.q-toolbar > .q-btn > .q-btn__wrapper > .q-btn__content').click()
        .then(() => {
          cy.get('[href="/signup"]').click()
          cy.url().should('include', '/signup')
        })
    })
  })
})
