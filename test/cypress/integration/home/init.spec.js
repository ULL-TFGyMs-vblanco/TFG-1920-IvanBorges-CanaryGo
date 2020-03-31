import * as ctx from '../../../../quasar.conf.js'

describe('Navegando a la app', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Tiene asignado un Título', () => {
    cy.title().should('include', 'CanaryGo')
  })
})

// describe('Home page tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
//   it('Tiene un fondo', () => {
//     cy.get('.landing-wrapper')
//       .should('have.html', 'canarygo').and('match', /(".+(\/img\/background).+\.png)/);
//   });
//   it('has pretty logo', () => {
//     cy.get('.landing-wrapper img')
//       .should('have.class', 'logo-main')
//       .and('have.attr', 'src')
//       .and('match', /^(data:image\/svg\+xml).+/);
//   });
//   it('has very important information', () => {
//     cy.get('.instruction-wrapper')
//       .should('contain', 'SETUP INSTRUCTIONS')
//       .and('contain', 'Configure Authentication')
//       .and('contain', 'Database Configuration and CRUD operations')
//       .and('contain', 'Continuous Integration & Continuous Deployment CI/CD');
//   });
// });
