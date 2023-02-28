describe('CSS_Locators', () => {
    it('CSS_Locator_01', () => {
      cy.visit("https://www.telerik.com/search")
      cy.get(".TK-Tag-Input").type("search")  // Class & Tag is Optional
      cy.get(".TK-Tag-Input-Button").click()
      cy.get(".TK-Search-Results-Query").contains("search") //Assertion
    })

  })