
const SORTING_SELECT = 'Clear...';
const EACH_PRODUCT_PRICE = '.container > div > a > div > p > span';



class SaleorCategoryPage {
  
static chooseNewSorting(sortBy) {
    cy.contains(SORTING_SELECT).click();
    cy.contains(sortBy).click();
    cy.url().should('include', 'sortBy=')
    cy.contains(sortBy).should('be.visible'); 
    cy.reload()
}

static checkDescSort(sortBy) {
  cy.get('img', { timeout: 20000 }).should('be.visible')

  if(sortBy==='Price High-Low'){
    cy.get(EACH_PRODUCT_PRICE).then(($el) => {
      const x = $el.get(0).innerText
      const y = $el.get(1).innerText
      const firstProductPrice = parseFloat(x.substring(0, x.length-4).replace(/[^0-9\.]+/g,"."))
      const secondProductPrice = parseFloat(y.substring(0, y.length-4).replace(/[^0-9\.]+/g,"."))
      expect(firstProductPrice).to.be.at.least(secondProductPrice)
    })
  }

  if(sortBy==='Price Low-High'){
    cy.get(EACH_PRODUCT_PRICE).then(($el) => {
      var x = $el.get(0).innerText
      var y = $el.get(1).innerText
      var firstProductPrice = parseFloat(x.substring(0, x.length-4).replace(/[^0-9\.]+/g,"."))
      var secondProductPrice = parseFloat(y.substring(0, y.length-4).replace(/[^0-9\.]+/g,"."))
      expect(secondProductPrice).to.be.at.least(firstProductPrice)
    })
  }
  }

}

export default SaleorCategoryPage;
