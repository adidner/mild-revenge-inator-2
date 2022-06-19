describe('empty spec', () => {
  // it('Car Attack 1', () => {
  //   cy.visit('https://www.fitzmall.com/Inventory/SearchResults?Conditions=ALL&Makes=&UseCriteria=true');
  // })
  it('Car Attack 2', () => {
    cy.visit('https://www.enterprisecarsales.com/list/used-cars-maryland/');
    cy.contains("Elantra").click();
  })
  // it('Car Attack 3', () => {
  //   cy.visit('https://www.cars.com/shopping/baltimore-md/');
  //   // let allClickCards = cy.get('[class="vehicle-card-main js-gallery-click-card"]');
  //   let allClickCards = cy.contains("2021");
  //   allClickCards.click();
  // })
})