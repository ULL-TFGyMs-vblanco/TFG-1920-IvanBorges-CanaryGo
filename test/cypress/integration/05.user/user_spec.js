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
    it('Al intentar hacer login se mueve a la página usuario', () => {
      cy.url().should('include', '/events')
      cy.visit('/update')
    })
  })

  /// ////////////////////////////
  describe('Nuevo evento falla correctamente', () => {
    it('El perfil existe ', () => {
      cy.get('#formulario > img').should('exist')
      cy.get('#perfil_actual').should('exist')
      cy.get('#perfil_actual').contains('Perfil actual')
    })

    it('La imagen de usuario y selector existen ', () => {
      cy.get('.q-img__content').should('exist')
      cy.get('.picture-preview').should('exist')
    })

    it('Borrar perfil existe ', () => {
      cy.get('#borrar_perfil').should('exist')
      cy.get('#borrar_perfil').contains('Borrar usuario')
    })

    // it('Se muestran los datos actuales', () => {
    //     cy.get('.picture-preview').should('exist')
    //     cy.get('.Nombre > .q-field__inner > .q-field__control').contains('Iván Glez')
    //     cy.get('.Usuario > .q-field__inner > .q-field__control').contains('@alu0100880755')
    //     cy.get('.Genero > .q-field__inner > .q-field__control').contains('m')
    //     cy.get('.Fecha > .q-field__inner > .q-field__control').contains('1996/07/01')
    //     cy.get('.Email > .q-field__inner > .q-field__control').contains('alu0100880755@ull.edu.es')
    //     cy.get('.Contrasena > .q-field__inner > .q-field__control').contains('')
    // })

    it('Limpiando datos', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Rellenamos datos', () => {
      cy.get('.picture-preview').should('exist')
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Iván Glez')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('@alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    })

    it('Al intentar registrarse se cambia de página', () => {
      cy.get('.Actualizar > .q-btn__wrapper').click()
        .then(() => {
          cy.url().should('include', '/events')
        })
    })
  })
})

// /// ////////////////////////////
describe('ENGLISH', () => {
  describe('Navigating to the app', () => {
    it('Navigating to update profile', () => {
      cy.visit('/login')
      cy.title().should('include', 'CanaryGo')
    })
    it('Login correct', () => {
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
      cy.get('.Registro > .q-btn__wrapper').click()
    })
    it('Trying to login moves to update user page', () => {
      cy.url().should('include', '/events')
      cy.visit('/update')
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
  describe('New event fails successfully', () => {
    it('Profile exists', () => {
      cy.get('#formulario > img').should('exist')
      cy.get('#perfil_actual').should('exist')
      cy.get('#perfil_actual').contains('Current profile')
    })

    it('User image and selector exist', () => {
      cy.get('.q-img__content').should('exist')
      cy.get('.picture-preview').should('exist')
    })

    it('Delete profile exists', () => {
      cy.get('#borrar_perfil').should('exist')
      cy.get('#borrar_perfil').contains('Delete user')
    })

    // it ('The current data is displayed', () => {
    //     cy.get('.picture-preview').should('exist')
    //     cy.get('.Nombre > .q-field__inner > .q-field__control').contains('Iván Glez')
    //     cy.get('.Usuario > .q-field__inner > .q-field__control').contains('@alu0100880755')
    //     cy.get('.Genero > .q-field__inner > .q-field__control').contains('m')
    //     cy.get('.Fecha > .q-field__inner > .q-field__control').contains('1996/07/01')
    //     cy.get('.Email > .q-field__inner > .q-field__control').contains('alu0100880755@ull.edu.es')
    //     cy.get('.Contrasena > .q-field__inner > .q-field__control').contains('')
    // })

    it('Cleaning data', () => {
      cy.get('.Reset > .q-btn__wrapper').click()
    })

    it('Fill data', () => {
      cy.get('.picture-preview').should('exist')
      cy.get('.Nombre > .q-field__inner > .q-field__control').type('Iván Glez')
      cy.get('.Usuario > .q-field__inner > .q-field__control').type('@alu0100880755')
      cy.get('.Genero > .q-field__inner > .q-field__control').click().get('.q-virtual-scroll__content > :nth-child(1)').click()
      cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
      cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
      cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    })

    it('When trying to register you change the page', () => {
      cy.get('.Actualizar > .q-btn__wrapper').click()
        .then(() => {
          cy.url().should('include', '/events')
        })
    })
  })
})
