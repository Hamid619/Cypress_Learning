
describe('XPath', () => {
    it('Find Number of Searches', () => {
        cy.visit("https://www.telerik.com/search")
        cy.get(".TK-Tag-Input").type("hamid")  // Class & Tag is Optional
        cy.get(".TK-Tag-Input-Button").click()
        cy.get(".TK-Search-Results-Query").contains("hamid")
       
        cy.xpath('//ul[@class="TK-Search-Results-List"]//li').should('have.length', 13)
        cy.xpath("(//ul[@class='TK-Search-Results-List']//li)").should('be.visible')
        cy.xpath('//ul[@class="TK-Search-Results-List"]//li').should('have.length.at.least', 5)
        cy.xpath('//ul[@class="TK-Search-Results-List"]//li').should('have.length.of.at.most', 505)
        
    })

  })