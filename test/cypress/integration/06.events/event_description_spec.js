/* eslint-disable no-undef */
/// //////////// SPANISH CHECK ////////////////
describe('ESPAÑOL', () => {
  describe('Navegando a la app', () => {
    it('Navegando a eventos', () => {
      cy.visit('/login')
      cy.title().should('include', 'CanaryGo')
    })
    it('Login correcto', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Registro > .q-btn__wrapper').click()
    })
    it('Al intentar hacer login se mueve a la página eventos', () => {
      cy.url().should('include', '/events')
      cy.visit('/pasa-un-dia-relajante-en-los-jameos')
    })
  })

  /// ////////////////////////////
  describe('Sección eventos funciona correctamente', () => {
    it('Se muestra la imagen correctamente', () => {
      cy.get('.q-img__content').should('exist')
    })

    it('Se muestran los votos correctamente', () => {
      cy.get('.votos').should('exist')
    })

    it('Se muestra el título correctamente', () => {
      cy.get('#titulo').contains('Pasa un día relajante en los Jameos')
    })

    it('Se muestra la isla correctamente', () => {
      cy.get('.ubicacion').contains('Lanzarote')
    })

    it('Se muestra el precio correctamente', () => {
      cy.get('.precio').contains('23 €')
    })

    it('Se muestra la fecha correctamente', () => {
      cy.get('.fecha').should('exist')
    })

    it('Se muestra la descripción correctamente', () => {
      cy.get('#descripcion').contains('Descripción')
      cy.get('#descripcion_texto').contains('Disfruta de espacios y rincones impactantes como un lago natural con aguas transparentes y una bóveda de cañón, que recuerda a la nave de una catedral, con un agujero en la parte superior por donde entra un impresionante haz de luz de forma cenital.')
    })

    it('Se muestra el codigo correctamente', () => {
      cy.get('.descuento').contains('Código de descuento')
      cy.get('.descuento_codigo').contains('LNZ2020')
    })

    it('Se muestra la duración correctamente', () => {
      cy.get('.duracion').contains('Duración del evento')
      cy.get('.fechas').contains('2020/05/01 - 2020/05/01')
    })

    it('Se muestra la localización correctamente', () => {
      cy.get('.localizacion').contains('Localización del evento')
      cy.get('#mapa').should('exist')
    })

    it('Se muestra maps correctamente', () => {
      cy.get('#Maps > .q-btn__wrapper').should('exist')
    })

    it('Se muestra el botón de ver link correctamente', () => {
      cy.get('.evento').should('exist')
    })

    it('Se muestran los comentarios correctamente', () => {
      cy.get('.color_comentarios').should('exist')
      cy.get('#seccion_comentarios').should('exist')
    })
  })
})

/// ////////////////////////////
/// //////////// ENGLISH CHECK ////////////////
describe('ENGLISH', () => {
  describe('Navigating to the app', () => {
    it('Has a Title assigned', () => {
      cy.visit('/login')
      cy.title().should('include', 'CanaryGo')
    })

    it('Login correct', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Registro > .q-btn__wrapper').click()
    })

    it('Trying to login moves to the events page', () => {
      cy.url().should('include', '/events')
      cy.visit('/pasa-un-dia-relajante-en-los-jameos')
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
  describe('Events section works correctly', () => {
    it('Image is displayed correctly', () => {
      cy.get('.q-img__content').should('exist')
    })

    it('Votes display correctly', () => {
      cy.get('.votos').should('exist')
    })

    it('Title displayed correctly', () => {
      cy.get('#titulo').contains('Pasa un día relajante en los Jameos')
    })

    it('Island is displayed correctly', () => {
      cy.get('.ubicacion').contains('Lanzarote')
    })

    it('The price is displayed correctly', () => {
      cy.get('.precio').contains('23 €')
    })

    it('The date is displayed correctly', () => {
      cy.get('.fecha').should('exist')
    })

    it('Description is displayed correctly', () => {
      cy.get('#descripcion').contains('Description')
      cy.get('#descripcion_texto').contains('Disfruta de espacios y rincones impactantes como un lago natural con aguas transparentes y una bóveda de cañón, que recuerda a la nave de una catedral, con un agujero en la parte superior por donde entra un impresionante haz de luz de forma cenital.')
    })

    it('The code is displayed correctly', () => {
      cy.get('.descuento').contains('Discount code')
      cy.get('.descuento_codigo').contains('LNZ2020')
    })

    it('Duration is displayed correctly', () => {
      cy.get('.duracion').contains('Duration of the event')
      cy.get('.fechas').contains('2020/05/01 - 2020/05/01')
    })

    it('The location is displayed correctly', () => {
      cy.get('.localizacion').contains('Event location')
      cy.get('#mapa').should('exist')
    })

    it('Maps are displayed correctly', () => {
      cy.get('#Maps > .q-btn__wrapper').should('exist')
    })

    it('The link view button is displayed correctly', () => {
      cy.get('.evento').should('exist')
    })

    it('Comments display correctly', () => {
      cy.get('.color_comentarios').should('exist')
      cy.get('#seccion_comentarios').should('exist')
    })
    /// ////////////////////////////
  })
})
