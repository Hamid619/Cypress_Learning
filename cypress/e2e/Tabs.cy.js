describe.only('Handle Tabs', () => {
    it.skip('Approach_01', () => {
      cy.visit("https://the-internet.herokuapp.com/windows")    //Parent Tab
      cy.get(".example >a").invoke('removeAttr','target').click();  //Clicking on Link
      cy.url().should('include' ,'https://the-internet.herokuapp.com/windows/new'); //Validation on Link
      cy.wait(5000)  
      // Operations
      cy.go('back')
    })

    it('Approach_02', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")    //Parent Tab
        cy.get(".example >a").then((e)=>{
        let url =e.prop('href');
        cy.visit(url);    
        })
        cy.url().should('include' ,'https://the-internet.herokuapp.com/windows/new'); //Validation on Link
        cy.wait(5000)  
        // Operations
        cy.go('back')
      })
    
  })
  