/* eslint-disable no-undef */
/// //////////// SPANISH CHECK ////////////////
describe('ESPAÑOL', () => {
  describe('Navegando a la app', () => {
    it('Navegando a nuevo evento', () => {
      cy.visit('/login')
      cy.title().should('include', 'CanaryGo')
    })
    it('Login correcto', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Registro > .q-btn__wrapper').click()
    })
    it('Al intentar hacer login se mueve a la página nuevo evento', () => {
      cy.url().should('include', '/events')
      cy.visit('/new')
    })
  })

  /// ////////////////////////////
  describe('Nuevo evento falla correctamente', () => {
    it('Registro con datos mal', () => {
      cy.get('.picture-preview').should('exist')
      cy.get('.nombre_evento > .q-field__inner > .q-field__control').type('Evento de Prueba')
      // cy.get('#mapa').click()
      cy.get('.fecha_inicio > .q-field__inner > .q-field__control').type('18/07/2020')
      cy.get('.fecha_fin > .q-field__inner > .q-field__control').type('20/07/19')
      cy.get('.precio > .q-field__inner > .q-field__control').type('25')
      cy.get('.descuento > .q-field__inner > .q-field__control').type('2020')
      cy.get('.link > .q-field__inner > .q-field__control').type('https://www.ull.es/')
      cy.get('.descripcion > .q-field__inner > .q-field__control').type('Evento de Prueba')
    })

    it('Al ingresar se indica formato de fecha incorrecto', () => {
      cy.get('.Compartir > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.fecha_fin > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Introduce un formato correcto de fecha')
        })
    })

    it('Se indica que falta introducir una ubicación', () => {
      cy.get('.Compartir > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.localizacion > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Debes introducir la localización del evento')
        })
    })

    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Registro correcto', () => {
      cy.get('.picture-preview').should('exist')
      cy.get('.nombre_evento > .q-field__inner > .q-field__control').type('Evento de Prueba')
      cy.get('#mapa').click()
      cy.get('.fecha_inicio > .q-field__inner > .q-field__control').type('2020/07/18')
      cy.get('.fecha_fin > .q-field__inner > .q-field__control').type('2020/07/19')
      cy.get('.precio > .q-field__inner > .q-field__control').type('25')
      cy.get('.descuento > .q-field__inner > .q-field__control').type('2020')
      cy.get('.link > .q-field__inner > .q-field__control').type('https://www.ull.es/')
      cy.get('.descripcion > .q-field__inner > .q-field__control').type('Evento de Prueba')
    })

    it('Al ingresar se indica que no están aceptados los términos', () => {
      cy.get('.Compartir > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.q-notification').contains('Debe confirmar la veracidad de la información')
          // cy.contains('Debe confirmar la veracidad de la información') // Forma mas global
        })
    })

    it('Al intentar registrar se mantiene en la página', () => {
      cy.url().should('include', '/new')
    })
  })
})

/// ////////////////////////////
describe('ENGLISH', () => {
  it('Has a Title assigned', () => {
    cy.visit('/login')
    cy.title().should('include', 'CanaryGo')
  })

  it('Login correct', () => {
    cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
    cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    cy.get('.Registro > .q-btn__wrapper').click()
  })

  it('Trying to login moves to the new event page', () => {
    cy.url().should('include', '/events')
    cy.visit('/new')
  })

  it('The language is changed', () => {
    cy.get('.language > .q-field > .q-field__inner > .q-field__control > .q-field__control-container').click()
    cy.get('.q-virtual-scroll__content > :nth-child(2) > .q-item__section > .q-item__label').click()
      .then(() => {
        cy.get('.language > .q-field > .q-field__inner > .q-field__control > .q-field__control-container').contains('English')
      })
  })

  //     /// ////////// ENGLISH CHECK //////////////////
  //       /// ////////////////////////////
  describe('New event fails successfully', () => {
    it('Bad data record', () => {
      cy.get('.picture-preview').should('exist')
      cy.get('.nombre_evento > .q-field__inner > .q-field__control').type('Test Event')
      // cy.get('#mapa').click()
      cy.get('.fecha_inicio > .q-field__inner > .q-field__control').type('18/07/2020')
      cy.get('.fecha_fin > .q-field__inner > .q-field__control').type('20/07/19')
      cy.get('.precio > .q-field__inner > .q-field__control').type('25')
      cy.get('.descuento > .q-field__inner > .q-field__control').type('2020')
      cy.get('.link > .q-field__inner > .q-field__control').type('https://www.ull.es/')
      cy.get('.descripcion > .q-field__inner > .q-field__control').type('Test Event')
    })

    it('Entering the wrong date format is indicated', () => {
      cy.get('.Compartir > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.fecha_fin > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('Please enter a correct date format')
        })
    })

    it('It is indicated that a location has to be entered', () => {
      cy.get('.Compartir > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.localizacion > .q-field__inner > .q-field__bottom > .q-field__messages > div').contains('You must enter the location of the event')
        })
    })

    it('Cleaning data', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Correct record', () => {
      cy.get('.picture-preview').should('exist')
      cy.get('.nombre_evento > .q-field__inner > .q-field__control').type('Test Event')
      cy.get('#mapa').click()
      cy.get('.fecha_inicio > .q-field__inner > .q-field__control').type('2020/07/18')
      cy.get('.fecha_fin > .q-field__inner > .q-field__control').type('2020/07/19')
      cy.get('.precio > .q-field__inner > .q-field__control').type('25')
      cy.get('.descuento > .q-field__inner > .q-field__control').type('2020')
      cy.get('.link > .q-field__inner > .q-field__control').type('https://www.ull.es/')
      cy.get('.descripcion > .q-field__inner > .q-field__control').type('Test Event')
    })

    it('By entering it is indicated that the terms are not accepted', () => {
      cy.get('.Compartir > .q-btn__wrapper').click()
        .then(() => {
          cy.get('.q-notification').contains('You must confirm the veracity of the information')
          // cy.contains('Debe confirmar la veracidad de la información') // Forma mas global
        })
    })

    it('When trying to register it stays on the page', () => {
      cy.url().should('include', '/new')
    })
  })
})
