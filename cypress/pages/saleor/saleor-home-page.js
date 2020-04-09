

  beforeEach(() => {
    cy.server()
    // cy.route({url: '/graphl',  method: 'POST'}).as('graphql')
})

  afterEach(()=>{
  })

class SaleorHomePage {
  

  static visit() {
  cy.visit('/', {onBeforeLoad: function(win) {
    const promise = new Promise(function(resolve) {});
    return win.navigator.serviceWorker.register = function() {
      return promise;
    }
    
  }}) // onBeforeLoad we are deleting serviceWorker because was bugged(?) something wrong goes here
}

  static hoverCategory(category) {
    cy.contains(category, { timeout: 10000 }).trigger('mouseover')
    cy.contains(category).should('be.visible');  
  }

  static chooseCategory(category) {
    cy.contains(category).should('be.visible');  
    cy.contains(category).click()
  }

}

export default SaleorHomePage;
