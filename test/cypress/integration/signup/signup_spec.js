/* eslint-disable no-undef */
/// //////////// SPANISH CHECK ////////////////
describe('ESPAÑOL', () => {
  describe('Navegando a la app', () => {
    beforeEach(() => {
      cy.visit('/signup')
    })
    it('Tiene asignado un Título', () => {
      cy.title().should('include', 'CanaryGo')
    })
  })

  /// ////////////////////////////
  describe('Registro falla correctamente', () => {
    it('Registro con datos mal', () => {
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('19960701')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123113')
    })

    it('Al ingresar se indica formato de fecha incorrecto', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Fecha > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Introduce un formato correcto de fecha')
        })
    })

    it('Al ingresar se indica formato de email incorrecto', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Email > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Debes introducir un email')
        })
    })

    it('Al ingresar se indican contraseñas diferentes', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Contrasena2 > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Las contraseñas no coinciden')
        })
    })

    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Registro correcto', () => {
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123123')
    })

    it('Al ingresar se indica que no están aceptados los términos', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.q-notification').contains('Debes aceptar los términos y condiciones')
          // cy.contains('Debes aceptar los términos y condiciones') // Forma mas global
        })
    })

    it('Al intentar registrarse se mantiene en la página', () => {
      cy.url().should('include', '/signup')
    })
  })

  /// ////////////////////////////
  describe('Registro funciona correctamente', () => {
    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Registro correcto', () => {
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Terms').click()
    })

    it('Al ingresar se indica que ya existe el usuario', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          // cy.get('.q-notification').contains('Se ha producido un error al registrar el usuario. El usuario ya existe')
          cy.contains('Se ha producido un error al registrar el usuario. El usuario ya existe') // Forma mas global
        })
    })

    it('Al intentar registrarse se mantiene en la página', () => {
      cy.url().should('include', '/signup')
    })
  })
})

/// ////////////////////////////
describe('ENGLISH', () => {
  describe('Navigating to the app', () => {
    beforeEach(() => {
      cy.visit('/signup')
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
  describe('Registration fails successfully', () => {
    it('Registration with bad data', () => {
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('19960701')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123113')
    })

    it('Entering the wrong date format is indicated', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Fecha > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Enter a correct date format')
        })
    })

    it('When entering the wrong email format is indicated', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Email > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('You must enter an email')
        })
    })

    it('When entering they indicate if there are different passwords', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.Contrasena2 > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Passwords do not match')
        })
    })

    it('Cleaning data', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Registration correct', () => {
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123123')
    })

    it('By entering it is indicated that the terms are not accepted', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.q-notification').contains('You must agree to terms and conditions')
        })
    })

    it('When trying to register, it stays on the page', () => {
      cy.url().should('include', '/signup')
    })
  })

  /// ////////////////////////////
  describe('Registration works correctly', () => {
    it('Cleaning data', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Registration correct', () => {
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Terms').click()
    })

    it('When entering everything is indicated the user exits', () => {
      cy.get('.Registro > .q-btn__wrapper').click()
        .then(() => {
          // cy.get('.q-notification').contains('An error occurred while registering the user. User already exists')
          cy.contains('An error occurred while registering the user. User already exists')
        })
    })

    it('When trying to register, it stays on the page', () => {
      cy.url().should('include', '/signup')
    })
  })
})
