describe('Handle_Dropdowns', () => {
    //Dropdown with Select
    it.skip('Dropdown_With_Select', () => {
      cy.visit("https://www.zoho.com/commerce/free-demo.html")
      cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
      
    })

    //Dropdown withOut Select bootstrap
    it.skip('Dropdown_WithOut_Select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('China').type('{enter}')
        cy.get('#select2-billing_country-container').type('China').should('have.text','China')
      })

    //Dropdown with Auto-Search Options
    it.skip('Auto_Search_Dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Islama')
        cy.get('.suggestion-title').contains('Islamophobia').click();    
      })

      it('Dynamic Drop_down', () => {
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('Cypress Automation')
        cy.wait(3000)
        //console.log('div.wM6W7d>span.len').to.have.lenghtOf(10)
        //expect(Cypress.$('div.wM6W7d>span.len')).to.have.lengthOf(10)
        //cy.get('div.wM6W7d>span').should('have.lenght', 10)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
        console.log($el.text())
        // $el is a wrapped jQuery element
        if ($el.text() === 'cypress automation tool') 
        {
          console.log("-----------")
          console.log(index)
          console.log($list)
          // cy.wrap($el).click()
          cy.wrap($el).click({force:true})
          console.log($el.text())
          console.log("-----------")
          }
        }) 
        cy.get("input[name='q']").should('have.value','cypress automation tool')
        })

        it.skip('Dynamic_Dropdown_02', () => {
          cy.visit('https://google.com')
          cy.get('input[name="q"]').type('Cypress testing')
          cy.get('form[action="/search"]').submit()
          cy.wait(3000)
          cy.contains('Cypress testing - Google Search').should('be.visible')
          cy.get('#rso').children().should('have.length.of.at.least', 10)
          
        })
    

  })