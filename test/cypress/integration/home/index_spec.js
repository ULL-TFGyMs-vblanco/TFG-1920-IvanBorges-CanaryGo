/* eslint-disable no-undef */
/// //////////// SPANISH CHECK ////////////////
describe('ESPAÑOL', () => {
  describe('Navegando a la app', () => {
    beforeEach(() => {
      cy.visit('/home')
    })
    it('Tiene asignado un Título', () => {
      cy.title().should('include', 'CanaryGo')
    })
  })

  /// ////////////////////////////
  describe('Seccion 1 funciona correctamente', () => {
    it('Se muestran los datos correctamente', () => {
      cy.get('#seccionhtml > .q-parallax__content').contains('Encuentra los eventos que tanto buscas')
      cy.get('#seccionhtml > .q-parallax__content > .q-card__actions').contains('Más información')
    })

    it('Al expandir se muestra el contenido', () => {
      cy.get('#seccionhtml > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml > .q-parallax__content').contains('NO MAS EVENTOS OLVIDADOS')
          cy.get('#seccionhtml > .q-parallax__content').contains('Muchas veces debido a que el evento se hace de forma local o en otra isla, se desconoce de la existencia del mismo (por muy bueno que sea). Olvídate de ese momento con CanaryGo.')
          cy.get('#seccionhtml > .q-parallax__content').contains('OPINIONES DE GENTE COMO TÚ')
          cy.get('#seccionhtml > .q-parallax__content').contains('Gracias a las aportaciones de la gran comunidad podrás saber si el evento se adecua a lo que se está buscando, lo bueno y lo malo.')
        })
    })

    it('Cerrando seccion', () => {
      cy.get('#seccionhtml > .q-parallax__content > .q-card__actions').click()
    })

    it('Se mantiene en la página', () => {
      cy.url().should('include', '/home')
    })
  })

  /// ////////////////////////////
  describe('Seccion 2 funciona correctamente', () => {
    it('Se muestran los datos correctamente', () => {
      cy.get('#seccionhtml2 > .q-parallax__content').contains('Organiza el calendario a tu manera')
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').contains('Más información')
    })

    it('Al expandir se muestra el contenido', () => {
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml2 > .q-parallax__content').contains('ORGANIZA TUS PRIORIDADES')
          cy.get('#seccionhtml2 > .q-parallax__content').contains('Puedes ordenar tus eventos según tus prioridades y preferencias: (Isla, Fecha, Novedades). De esta forma podrás encontrar siempre lo que buscas.')
        })
    })

    it('Cerrando seccion', () => {
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').click()
    })

    it('Se mantiene en la página', () => {
      cy.url().should('include', '/home')
    })
  })

  /// ////////////////////////////
  describe('Seccion 3 funciona correctamente', () => {
    it('Se muestran los datos correctamente', () => {
      cy.get('#seccionhtml3 > .q-parallax__content').contains('Conoce gente nueva dentro de la comunidad')
      cy.get('#seccionhtml3 > .q-parallax__content > .q-card__actions').contains('Más información')
    })

    it('Al expandir se muestra el contenido', () => {
      cy.get('#seccionhtml3 > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml3 > .q-parallax__content').contains('CONTACTA CON GENTE NUEVA')
          cy.get('#seccionhtml3 > .q-parallax__content').contains('Conoce gente nueva dentro de la comunidad, mantén el contacto, mira recomendaciones basadas en tu perfil. Tú eliges.')
          cy.get('#seccionhtml3 > .q-parallax__content').contains('CREA TUS GRUPOS FAVORITOS')
          cy.get('#seccionhtml3 > .q-parallax__content').contains('Crea tus quedadas favoritas. Juntarse es un comienzo. Seguir juntos es un progreso. Trabajar juntos es un éxito.')
        })
    })

    it('Cerrando seccion', () => {
      cy.get('#seccionhtml3 > .q-parallax__content > .q-card__actions').click()
    })

    it('Se mantiene en la página', () => {
      cy.url().should('include', '/home')
    })
  })

  /// ////////////////////////////
  describe('Seccion 4 funciona correctamente', () => {
    it('Se muestran los datos correctamente', () => {
      cy.get('#seccionhtml4 > .q-parallax__content').contains('Mejora en la gestión de viajes')
      cy.get('#seccionhtml4 > .q-parallax__content > .q-card__actions').contains('Más información')
    })

    it('Al expandir se muestra el contenido', () => {
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml4 > .q-parallax__content').contains('PLANIFICA MEJOR TU SEMANA')
          cy.get('#seccionhtml4 > .q-parallax__content').contains('Muchas veces debido al desconocimiento de los eventos o actividades que existen e incluso la poca información que existe, es difícil planificar. Ahora eso ha quedado en el olvido.')
          cy.get('#seccionhtml4 > .q-parallax__content').contains('AÑADE RECORDATORIOS')
          cy.get('#seccionhtml4 > .q-parallax__content').contains('Mantente al tanto de todos los eventos próximos a los que te has suscrito.')
        })
    })

    it('Cerrando seccion', () => {
      cy.get('#seccionhtml4 > .q-parallax__content > .q-card__actions').click()
    })

    it('Se mantiene en la página', () => {
      cy.url().should('include', '/home')
    })
  })
})

/// ///////////////////////////////////////////////////////////////////////////////
/// //////////// ENGLISH CHECK ////////////////
describe('ENGLISH', () => {
  describe('Navigating to the app', () => {
    beforeEach(() => {
      cy.visit('/home')
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
  describe('Section 1 works properly', () => {
    it('Data is displayed correctly', () => {
      cy.get('#seccionhtml > .q-parallax__content').contains('Find the events you are looking for')
      cy.get('#seccionhtml > .q-parallax__content > .q-card__actions').contains('More info')
    })

    it('Expanding content is displayed', () => {
      cy.get('#seccionhtml > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml > .q-parallax__content').contains('NO MORE FORGOTTEN EVENTS')
          cy.get('#seccionhtml > .q-parallax__content').contains('Many times because the event is held locally or on another island, its existence is unknown, no matter how good it is. Forget about that moment with CanaryGo.')
          cy.get('#seccionhtml > .q-parallax__content').contains('REVIEWS OF PEOPLE JUST LIKE YOU')
          cy.get('#seccionhtml > .q-parallax__content').contains('Thanks to the contributions of the large community you will be able to know if the event is suitable for what you are looking for. The good and the bad of each event.')
        })
    })

    it('Closing section', () => {
      cy.get('#seccionhtml > .q-parallax__content > .q-card__actions').click()
    })

    it('It stays on the page', () => {
      cy.url().should('include', '/home')
    })
  })

  /// ////////////////////////////
  describe('Section 2 works properly', () => {
    it('Data is displayed correctly', () => {
      cy.get('#seccionhtml2 > .q-parallax__content').contains('Organize the calendar your way')
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').contains('More info')
    })

    it('Expanding content is displayed', () => {
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml2 > .q-parallax__content').contains('ORGANIZE YOUR PRIORITIES')
          cy.get('#seccionhtml2 > .q-parallax__content').contains('You can order your events according to your priorities and preferences: (Island, Date, News). In this way you can always find what you are looking for.')
        })
    })

    it('Closing section', () => {
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').click()
    })

    it('It stays on the page', () => {
      cy.url().should('include', '/home')
    })
  })

  /// ////////////////////////////
  describe('Section 3 works properly', () => {
    it('Data is displayed correctly', () => {
      cy.get('#seccionhtml3 > .q-parallax__content').contains('Meet new people in the community')
      cy.get('#seccionhtml3 > .q-parallax__content > .q-card__actions').contains('More info')
    })

    it('Expanding content is displayed', () => {
      cy.get('#seccionhtml3 > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml3 > .q-parallax__content').contains('CONTACT NEW PEOPLE')
          cy.get('#seccionhtml3 > .q-parallax__content').contains('Meet new people within the community, keep in touch, see recommendations based on your profile. You choose.')
          cy.get('#seccionhtml3 > .q-parallax__content').contains('CREATE YOUR FAVORITE GROUPS')
          cy.get('#seccionhtml3 > .q-parallax__content').contains('Create your favorite meetups. Getting together is a start. Staying together is progress. Working together is a success.')
        })
    })

    it('Closing section', () => {
      cy.get('#seccionhtml3 > .q-parallax__content > .q-card__actions').click()
    })

    it('It stays on the page', () => {
      cy.url().should('include', '/home')
    })
  })

  /// ////////////////////////////
  describe('Section 4 works properly', () => {
    it('Data is displayed correctly', () => {
      cy.get('#seccionhtml4 > .q-parallax__content').contains('Improved travel management')
      cy.get('#seccionhtml4 > .q-parallax__content > .q-card__actions').contains('More info')
    })

    it('Expanding content is displayed', () => {
      cy.get('#seccionhtml2 > .q-parallax__content > .q-card__actions').click()
        .then(() => {
          cy.get('#seccionhtml4 > .q-parallax__content').contains('PLAN YOUR WEEK')
        })
    })

    it('Closing section', () => {
      cy.get('#seccionhtml4 > .q-parallax__content > .q-card__actions').click()
    })

    it('It stays on the page', () => {
      cy.url().should('include', '/home')
    })
  })
})
