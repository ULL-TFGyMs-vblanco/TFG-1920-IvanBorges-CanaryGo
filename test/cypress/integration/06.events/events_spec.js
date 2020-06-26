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
    })
  })

  /// ////////////////////////////
  describe('Sección superior funciona correctamente', () => {
    it('Se muestran el saludo correctamente', () => {
      cy.get('#saludo').contains('Hola @alu0100880755')
      cy.get('.saludo_2').contains('¿Qué tienes en mente?')
    })

    it('Se muestra la barra de busqueda', () => {
      cy.get('#busqueda').should('exist')
    })

    it('Se muestra la imagen de perfil de usuario', () => {
      cy.get('#imagen_perfil').should('exist')
      cy.get('#imagen_perfil').should('have.attr', 'src')
    })

    it('Se muestra la Sección de perfil de usuario', () => {
      cy.get('#imagen_perfil').click()
        .then(() => {
          cy.get('#ajustes_general').should('exist')
          cy.get('#perfil').contains('Perfil')
        })
    })
  })

  /// ////////////////////////////
  describe('Filtro de eventos funciona correctamente', () => {
    it('El fitro se muesra correctamente', () => {
      cy.get('#filtro').should('exist')
      cy.get('#destacados').contains('Más destacados')
      cy.get('#novedades').contains('Novedades')
      cy.get('#ubicacion_icono').should('exist')
    })

    it('Al expandir se muestra el contenido', () => {
      cy.get('#filtro > .q-field > .q-field__inner > .q-field__control').click()
        .then(() => {
          cy.get(':nth-child(1) > .q-item__section > .q-item__label').contains('Tenerife')
          cy.get(':nth-child(2) > .q-item__section > .q-item__label').contains('Gran Canaria')
          cy.get(':nth-child(3) > .q-item__section > .q-item__label').contains('La Palma')
          cy.get(':nth-child(4) > .q-item__section > .q-item__label').contains('La Gomera')
          cy.get(':nth-child(5) > .q-item__section > .q-item__label').contains('El Hierro')
          cy.get(':nth-child(6) > .q-item__section > .q-item__label').contains('Lanzarote')
          cy.get(':nth-child(7) > .q-item__section > .q-item__label').contains('Fuerteventura')
        })
    })
  })

  /// ////////////////////////////
  describe('Sección eventos funciona correctamente', () => {
    it('Se muestra la imagen correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > #imagen_evento > .q-img__content').should('exist')
    })

    it('Se muestran los votos correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .q-card__section--horiz > .votos_ > .votos').should('exist')
    })

    it('Se muestra el título correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .titulo').should('exist')
    })

    it('Se muestra la isla correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .ubicacion').should('exist')
    })

    it('Se muestra el precio correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .precio').should('exist')
    })

    it('Se muestra la fecha correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .q-card__section--horiz > .votos_ > .votos').should('exist')
    })

    it('Se muestra maps correctamente', () => {
      cy.get(':nth-child(3) > .my-card > .opciones > .q-card__actions > .maps').should('exist')
    })

    it('Se muestra el botón de ver evento correctamente', () => {
      cy.get(':nth-child(3) > .my-card > .opciones > .q-card__actions > .evento').should('exist')
    })

    it('Se muestra el botón de añadir evento correctamente', () => {
      cy.get('.boton_add > .q-btn__wrapper > .q-btn__content').should('exist')
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
  describe('Top section works correctly', () => {
    it('The greeting is displayed correctly', () => {
      cy.get('#saludo').contains('Welcome @alu0100880755')
      cy.get('.saludo_2').contains('What do you have in mind?')
    })

    it('The search bar is displayed', () => {
      cy.get('#busqueda').should('exist')
    })

    it('User profile image is displayed', () => {
      cy.get('#imagen_perfil').should('exist')
      cy.get('#imagen_perfil').should('have.attr', 'src')
    })

    it('User Profile Section is displayed', () => {
      cy.get('#imagen_perfil').click()
        .then(() => {
          cy.get('#ajustes_general').should('exist')
          cy.get('#perfil').contains('Profile')
        })
    })
  })

  /// ////////////////////////////
  describe('Event filter works correctly', () => {
    it('The filter is displayed correctly', () => {
      cy.get('#filtro').should('exist')
      cy.get('#destacados').contains('Most featured')
      cy.get('#novedades').contains('New')
      cy.get('#ubicacion_icono').should('exist')
    })

    it('Expanding content is displayed', () => {
      cy.get('#filtro > .q-field > .q-field__inner > .q-field__control').click()
        .then(() => {
          cy.get(':nth-child(1) > .q-item__section > .q-item__label').contains('Tenerife')
          cy.get(':nth-child(2) > .q-item__section > .q-item__label').contains('Gran Canaria')
          cy.get(':nth-child(3) > .q-item__section > .q-item__label').contains('La Palma')
          cy.get(':nth-child(4) > .q-item__section > .q-item__label').contains('La Gomera')
          cy.get(':nth-child(5) > .q-item__section > .q-item__label').contains('El Hierro')
          cy.get(':nth-child(6) > .q-item__section > .q-item__label').contains('Lanzarote')
          cy.get(':nth-child(7) > .q-item__section > .q-item__label').contains('Fuerteventura')
        })
    })
  })

  /// ////////////////////////////
  describe('Events section works correctly', () => {
    it('Image is displayed correctly', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > #imagen_evento > .q-img__content').should('exist')
    })

    it('Votes display correctly', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .q-card__section--horiz > .votos_ > .votos').should('exist')
    })

    it('Title displayed correctly', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .titulo').should('exist')
    })

    it('Se muestra la isla correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .ubicacion').should('exist')
    })

    it('Island is displayed correctly', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .precio').should('exist')
    })

    it('Se muestra la fecha correctamente', () => {
      cy.get(':nth-child(3) > .my-card > :nth-child(2) > [vertical=""] > .q-card__section--horiz > .votos_ > .votos').should('exist')
    })

    it('The date is displayed correctly', () => {
      cy.get(':nth-child(3) > .my-card > .opciones > .q-card__actions > .maps').should('exist')
    })

    it('The event view button is displayed correctly', () => {
      cy.get(':nth-child(3) > .my-card > .opciones > .q-card__actions > .evento').should('exist')
    })

    it('The add event button is displayed correctly', () => {
      cy.get('.boton_add > .q-btn__wrapper > .q-btn__content').should('exist')
    })
  })
  /// ////////////////////////////
})
