import HomepageObject from '../elements/Homepage'

describe('See characters', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('people').then((data) => {
      cy.route({
        method: 'GET',
        url: '**/api/people/?**',
        response: data,
        status: 200
      }).as('Homepage')
    })

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
  })

  it('should fetch People and navigate to details', () => {
    const Homepage = new HomepageObject()

    Homepage.visit()

    cy.get(':nth-child(1) > .btn').click()

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/person/1')
    })
  })

  it('should fetch new people on pagination', () => {
    const Homepage = new HomepageObject()

    Homepage.visit()

    cy.get('[data-testid=next-page-button]').click()

    cy.wait('@Homepage').should((xhr) => {
      expect(xhr.status).to.equal(200)
    })
  })
})
