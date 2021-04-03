export default class HomepageObject {
  visit() {
    cy.visit('/')

    return this
  }
}
