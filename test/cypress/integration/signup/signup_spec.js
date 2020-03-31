import Vue from 'vue'
import Login from '../../integration/login/login_spec'

describe('Navegando a la app', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })
  it('Tiene asignado un Título', () => {
    cy.title().should('include', 'CanaryGo')
  })
})

describe('Registro falla correctamente', () => {

  it('Registro', () => {
    cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
    cy.get('.Usuario > .q-field__inner > .q-field__control').type('ivanbor')
    cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
    cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
    cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
    cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123123')
  });

  it('Al ingresar se indica contraseña fallida', () => {

    const stub = cy.stub()

    cy.on('window:alert', stub)

    cy.get('.Registro > .q-btn__wrapper').click()
      .then(() => {
        cy.get(stub.getCall(0)).to.be.calledWith('hi')
      })
    // cy.get('.Contrasena2 > .q-field__inner > .q-field__bottom > .q-field__messages > div').should('include', '/Las contraseñas no coinciden')
  });

  it('Al intentar registrarse se mantiene en la página', () => {
    cy.url().should('include', '/signup')
  });

  // it('Registro correcto', () => {
  //   cy.get('.Nombre > .q-field__inner > .q-field__control').type('Ivan')
  //   cy.get('.Usuario > .q-field__inner > .q-field__control').type('ivanbor')
  //   cy.get('.Fecha > .q-field__inner > .q-field__control').type('1996/07/01')
  //   cy.get('.Email > .q-field__inner > .q-field__control').type('alu0100880755@ull.edu.es')
  //   cy.get('.Contrasena > .q-field__inner > .q-field__control').type('123123')
  //   cy.get('.Contrasena2 > .q-field__inner > .q-field__control').type('123123')
  //   cy.get('.Terms').click()
  // });

  // it('can assert on the alert text content', function () {
  //   const stub = cy.stub()

  //   cy.on('window:alert', stub)
  //     .then(() => {
  //       expect(stub.getCall(0)).to.be.calledWith('La contraseña introducida no es correct')
  //       expect(stub.getCall(0)).to.be.calledWith('La contraseña introducida no es correct')
  //     })
  // })

  // it('window prompt test', function () {
  //   cy.visit('/index.html', {
  //     onBeforeLoad (win) {
  //       cy.stub(win, 'prompt').returns('scorpio')
  //       cy.stub(win, 'alert').as('windowAlert')
  //     }
  //   })

  //   cy.get('#prompt').click().then(function () {
  //     expect(this.windowAlert).to.be.calledWith('Wow! I\'m a Scorpio too!')
  //   })
  // })

})
