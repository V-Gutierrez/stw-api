export default class CharacterPageObject {
  visit(id) {
    cy.visit(`/person/${id}`)

    return this
  }
}
