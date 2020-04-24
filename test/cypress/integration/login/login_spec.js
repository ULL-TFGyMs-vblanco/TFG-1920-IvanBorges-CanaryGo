/* eslint-disable no-undef */
/// //////////// SPANISH CHECK ////////////////
describe('ESPAÑOL', () => {
  describe('Navegando a la app', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
    it('Tiene asignado un Título', () => {
      cy.title().should('include', 'CanaryGo')
    })
  })

  /// ////////////////////////////
  describe('Login falla correctamente', () => {
    it('Registro con datos mal', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    })

    it('Al ingresar se indica formato de email incorrecto', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Email > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Debes introducir un email')
        })
    })

    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Login correcto', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123122')
    })

    // it('Al ingresar se indica contraseña incorrecta', () => {
    //   cy.get('.Registro > .q-btn__wrapper').click()
    //     .then(() => {
    //       cy.get('.Contrasena2 > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Las contraseñas no coinciden')
    //     })
    // })

    it('Al intentar hacer login se mantiene en la página', () => {
      cy.url().should('include', '/login')
    })
  })

  /// ////////////////////////////
  describe('Login funciona correctamente', () => {
    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Login correcto', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    })

    // it('Al ingresar se indica todo correcto', () => {
    //   cy.get('.Registro > .q-btn__wrapper').click()
    //     .then(() => {
    //       cy.get('.q-notification').contains('Inicio de sesión correcto')
    //     })
    // })

    it('Al intentar registrarse se mantiene en la página', () => {
      cy.url().should('include', '/login')
    })
  })
})

/// ////////////////////////////
describe('ENGLISH', () => {
  describe('Navigating to the app', () => {
    beforeEach(() => {
      cy.visit('/login')
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

  /// ////////// ENGLISH CHECK //////////////////
  /// ////////////////////////////
  describe('Login fails correctly', () => {
    it('Login with bad data', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    })

    it('When entering the wrong email format is indicated', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Email > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('You must enter an email')
        })
    })

    it('Clear Data', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Login correct', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123122')
    })

    // it('Incorrect password is indicated when entering', () => {
    //   cy.get('.Registro > .q-btn__wrapper').click()
    //     .then(() => {
    //       cy.get('.Contrasena2 > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Las contraseñas no coinciden')
    //     })
    // })

    it('When trying to login, it stays on the page', () => {
      cy.url().should('include', '/login')
    })
  })

  /// ////////////////////////////
  describe('Login works correctly', () => {
    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Login correct', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    })

    // it('When entering everything is indicated correct', () => {
    //   cy.get('.Registro > .q-btn__wrapper').click()
    //     .then(() => {
    //       cy.get('.q-notification').contains('Inicio de sesión correcto')
    //     })
    // })

    it('When trying to register, it stays on the page', () => {
      cy.url().should('include', '/login')
    })
  })
})
