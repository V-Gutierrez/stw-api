import CharacterPageObject from '../elements/CharacterPage'
import HomepageObject from '../elements/Homepage'

describe('See character data', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('person').then((data) => {
      cy.route({
        method: 'GET',
        url: '**/api/people/1',
        response: data,
        status: 200
      }).as('CharacterPageData')
    })

    cy.fixture('starships').then((data) => {
      cy.route({
        method: 'GET',
        url: '**/api/starships/**',
        response: data,
        status: 200
      }).as('Starships')
    })

    cy.fixture('people').then((data) => {
      cy.route({
        method: 'GET',
        url: '**/api/people/?page**',
        response: data,
        status: 200
      }).as('Homepage')
    })
  })

  it('should see character starships', () => {
    const Page = new CharacterPageObject()

    Page.visit(1)

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/person/1')
    })

    cy.get('[data-testid=starship-name]').should('exist')
    cy.get('[data-testid=starship-model]').should('exist')
  })

  it('should be able to go back to homepage', () => {
    cy.get('.person-details__link').click()

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })
})
