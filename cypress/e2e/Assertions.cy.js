
describe('Assertions_Demo', () => {
    it.only('Implict_Assertions', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   /*   cy.url().should('include' ,'orangehrmlive.com')
      .should('eq' , 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .should('contain' ,'orangehrmlive')*/

      // Assertions on URL
      cy.url().should('include' ,'orangehrmlive.com')
      .and('not.eq' , 'gttps://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('not.contain' ,'Arangehrmlive')
      
      //Assertions on Title
      cy.title().should('include' , 'Orange')
      .and('eq' , 'OrangeHRM')
      .and('contain' , 'HRM')

      //Assertions on Logo(That Logo is visible or not OR exist or not)
      cy.get('.orangehrm-login-branding > img').should('be.visible')
      .and('exist')

      //Assertion to Check how many links present on the web page

    cy.xpath("//a").should('have.length.of.at.most', 5)
    cy.xpath("//a").should('have.length.at.least', 5)
    cy.xpath("//a").should('have.length', '5')

    //   cy.xpath("//a").should('be.greaterThan', '1')
    cy.get("input[placeholder='Username']").type("Admin") // Provde a Value in Input Box
    cy.get("input[placeholder='Username']").should('have.value','Admin') // Value Check

    })
  
//-------------------------------------------------------------------------------------------//

    it('Explicit_Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
  
       let expName="sakshi wadhwani";
       cy.get(".oxd-userdropdown-name").then ( (x)=> {
       let actName=x.text() 
       //BDD Style
       expect(actName).to.equal(expName)
      // expect(actName).to.not.equal(expName)

      //TDD Style
      assert.equal(actName,expName)
      //assert.notEqual(actName,expName)
       })
      })

  })